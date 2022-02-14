import { SET_BLOGS_SUCCESS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOGS_SUCCESS:
      return action.blogs
    default:
      return state
  }
}

export default reducer
