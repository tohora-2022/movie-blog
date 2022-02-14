import { combineReducers } from 'redux'

import blogs from './blogs'
import loading from './loading'
import errMessage from './errMessage'

export default combineReducers({
  loading,
  blogs,
  errMessage
})
