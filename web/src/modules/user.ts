export const LOGIN_USER = 'login/USER';
export const LOGOUT_USER = 'logout/USER';


export const loginUser = (userInfo:any) => {
    return {
      type: LOGIN_USER,
      payload:userInfo
    };
  };
  
  export const logoutUser = () => {
    return {
      type: LOGOUT_USER,
    };
  };

  const initialState = {
    isLogin: false,
    name:"",
    email:""
  };


  function userReducer(state = initialState, action: { type: string ,payload:{name:string,email:string}}) {
    switch (action.type) {
      case LOGIN_USER:
        return {
            isLogin:true,
            name:action.payload.name,
            email:action.payload.email
        };
  
      case LOGOUT_USER:
        return {
            isLogin:false,
            name:"",
            email:""
        };
  
      default:
        return state;
    }
  }
  
  export default userReducer;