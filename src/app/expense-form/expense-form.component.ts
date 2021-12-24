import { Component, OnInit } from '@angular/core';
import { ExpenseType } from '../enums/expense-types.enum';
import { ExpenseItem, ExpenseState } from '../models/expense-item';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddExpenseAction, DeleteExpenseAction } from '../store/expense.action';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  public formTitle = 'Expense reimbursement form';
  public expenseTypes = ExpenseType;
  keys: any[];
  public expenseItem: ExpenseItem = new ExpenseItem();
  @ViewChild('expenseForm') expenseForm: any;
  public expenseItems: Observable<Array<ExpenseItem>>;
  
  constructor (private store: Store<ExpenseState>) {
    this.keys = Object.keys(this.expenseTypes).filter(t => !isNaN(Number(t)));
   }

  ngOnInit(): void {
    this.expenseItems = this.store.select((store) => store.expense);
  }

  /*Adding expense item*/
  onSubmit() {
    if (this.expenseForm.valid) {
      this.store.dispatch(new AddExpenseAction(this.expenseForm.value));
      this.expenseForm.reset();
    }
  }

  /*Deleting expense item*/
  onDeleteItem(index: number) {
    this.store.dispatch(new DeleteExpenseAction(index));
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

}