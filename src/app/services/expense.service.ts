import { Injectable } from '@angular/core';
import { ExpenseItem } from '../models/expense-item';

//this service can be used to store your items in the browser's local storage instead of an API call.
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  constructor() {}
  
  getItems() {
    //you can use this to get the expense items from the local storage using window.localStorage.getItem() method.
    return window.localStorage.getItem('__expenseData');
  }

  addItem(addItem: Array<ExpenseItem>) {
    //you can use this to store the expense items from the local storage using window.localStorage.setItem() method.
    window.localStorage.setItem('__expenseData', JSON.stringify(addItem));
  }

  deleteItem(deleteItem: Array<ExpenseItem>) {
    //you can use this to update the storage when you delete an expense item.
    window.localStorage.setItem('__expenseData', JSON.stringify(deleteItem));
  }
}
  