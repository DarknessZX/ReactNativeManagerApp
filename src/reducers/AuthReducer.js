import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_LOADING } from '../actions/type';

const INITIAL_STATE = { email : '' , password : '', user : {}, err : '', loginLoading : false }

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email : action.payload };
    case PASSWORD_CHANGED :
      return { ...state, password : action.payload };
    case LOGIN_USER_SUCCESS :
      return { ...state, ...INITIAL_STATE, user : action.payload };
    case LOGIN_USER_FAIL :
      return { ...state, err : action.payload, password : '', loginLoading : false };
    case LOGIN_USER_LOADING :
      return { ...state, loginLoading : action.payload };
    default:
      return state;
  }
}
