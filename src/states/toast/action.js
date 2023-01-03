const ActionType = {
  SHOW_TOAST: 'SHOW_TOAST',
  HIDE_TOAST: 'HIDE_TOAST',
};
function showToastActionCreator({ title, body, type }) {
  return {
    type: ActionType.SHOW_TOAST,
    payload: {
      toast: {
        title, body, isShown: true, type,
      },
    },
  };
}
function hideToastActionCreator() {
  return {
    type: ActionType.HIDE_TOAST,
    payload: {
      toast: {
        isShown: false,
      },
    },
  };
}
function showToast({ title, body, type }) {
  return async (dispatch) => {
    dispatch(showToastActionCreator({ title, body, type }));
    setTimeout(() => {
      dispatch(hideToastActionCreator());
    }, 2000);
  };
}

export {
  showToast, showToastActionCreator, ActionType, hideToastActionCreator,
};
