import { ExpenseItem } from '../models/expense-item';
import { ExpenseAction, ExpenseType } from '../store/expense.action';

export function ExpenseReducer(
  state: Array<ExpenseItem>,
  action: ExpenseAction
) {
  switch (action.type) {
    case ExpenseType.ADD_ITEM:
      if (state)
        return [...state, action.payload];
      else 
        return [action.payload];
    case ExpenseType.DELETE_ITEM:
      let newState = [...state];
      newState.splice(action.payload, 1);
      return (newState.length > 0) ? newState : null;
    default:
      const storedActions = window.localStorage.getItem('__expenseData');
      const initialState = storedActions ? JSON.parse(storedActions) : null;
      return initialState;
  }
}
