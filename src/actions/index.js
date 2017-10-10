import * as login from './login'

export const LoginAction = login

export const setDataAction = (data, option) => {
  return {
    response: {
      ...data
    },
    isGlobal: true,
    ...option
  }
}
