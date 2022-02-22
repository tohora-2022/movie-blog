import {
  SET_BLOGS_PENDING,
  SET_ERROR
} from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOGS_PENDING:
      return true
    default:
      return state
  }
}

export default reducer
