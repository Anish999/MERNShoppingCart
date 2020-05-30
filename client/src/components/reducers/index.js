import { combineReducers } from 'redux';

import chat from './chat.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  user,
  chat,
});

export default rootReducer;
