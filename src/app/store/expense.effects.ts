import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { ExpenseAction, ExpenseType } from '../store/expense.action';
import { ExpenseService } from '../services/expense.service';
import { ExpenseItem } from '../models/expense-item';

@Injectable()
export class LocalStorageEffects {

  @Effect({ dispatch: false })
  storeActions = this.actions.pipe(
    ofType(
      ExpenseType.ADD_ITEM,
      ExpenseType.DELETE_ITEM
    ),
    tap(action => {
      const storedActions = this._expenseService.getItems();
      const actions: Array<ExpenseItem> = storedActions ? JSON.parse(storedActions) : [];
      if (ExpenseType.ADD_ITEM === action.type) {
        const newActions = [...actions, action.payload];
        this._expenseService.addItem(newActions);
      } else if (ExpenseType.DELETE_ITEM === action.type) {
        actions.splice(action.payload, 1);
        this._expenseService.deleteItem(actions);
        if (actions.length == 0)
          this._expenseService.addItem(null);
      }
    }),
  );

  constructor(
    private actions: Actions<ExpenseAction>,
    private _expenseService: ExpenseService
  ) {}
}