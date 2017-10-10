import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

function entities(state = {}, action) {
  const { type, response, isGlobal, name } = action

  //log.debug(`Reducer action: ${type}, ${response}, ${isGlobal}`)

  let newState = Object.assign({}, state)
  // 存储数据
  if (type.indexOf('SET_DATA') !== -1 && isGlobal) {
    newState = Object.assign({}, state, response)
  }

  if (isGlobal && type.indexOf('ADD_DATA') !== -1) {
    newState = Object.assign({}, state, {
      [name] : {
        ...state[name],
        ...response
      }
    })
  }

  if (action.type === 'LOGIN_QUIT') {
    return {}
  }

  return newState
}

const rootReducer = combineReducers({
  entities,
  routing
});

export default rootReducer;
