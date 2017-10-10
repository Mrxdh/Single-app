export const LOGIN_SET_GLOBALDATA = 'LOGIN_SET_DATA'
export const LOGIN_QUIT = 'LOGIN_QUIT'

export const setLoginDataAction = (data) => {
  return {
    type     : LOGIN_SET_GLOBALDATA,
    response : {
      ...data
    },
    isGlobal : true
  }
}

export const quitLoginClearDataAction = (data) => {
  return {
    type     : LOGIN_QUIT,
    response : {
    },
    isGlobal : true
  }
}
