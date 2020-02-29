const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_RANKING':
      return action.data
    default:
      return state
  }
}

export default reducer
