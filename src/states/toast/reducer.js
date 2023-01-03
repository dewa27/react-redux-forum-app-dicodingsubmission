import { ActionType } from './action';

function toastReducer(toast = {}, action = {}) {
  switch (action.type) {
    case ActionType.SHOW_TOAST:
      return action.payload.toast;
    case ActionType.HIDE_TOAST:
      return { title: '', body: '', isShown: action.payload.isShown };
    default:
      return toast;
  }
}

export default toastReducer;
