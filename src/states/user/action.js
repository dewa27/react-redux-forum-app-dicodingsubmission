import api from '../../utils/api';
import { showToast } from '../toast/action';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}
function asyncRegisterUser({ email, name, password }) {
  return async (dispatch) => {
    try {
      await api.register({ email, name, password });
      dispatch(showToast({ title: 'Register Success', body: 'Your account has successfuly created !', type: 'success' }));
    } catch (error) {
      dispatch(showToast({ title: 'Register Failed', body: error.message, type: 'error' }));
    }
  };
}
export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
