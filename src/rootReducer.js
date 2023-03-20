import { combineReducers } from 'redux';
import authReducer from '../features/authSlice';
import profileReducer from '../features/profileSlice';
import userListReducer from '../features/userListSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  userList: userListReducer,
});

export default rootReducer;
