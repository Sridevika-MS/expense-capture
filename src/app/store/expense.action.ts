import { Action } from '@ngrx/store';
import { ExpenseItem } from '../models/expense-item';

export enum ExpenseType {
  ADD_ITEM = '[EXPENSE] Add Expense',
  DELETE_ITEM = '[EXPENSE] Delete Expense',
}

export class AddExpenseAction implements Action {
  readonly type = ExpenseType.ADD_ITEM;
 
  constructor(public payload: ExpenseItem) {}
}

export class DeleteExpenseAction implements Action {
  readonly type = ExpenseType.DELETE_ITEM;
 
  constructor(public payload: number) {}
}

export type ExpenseAction = AddExpenseAction | DeleteExpenseAction;