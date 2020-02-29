const reducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADING':
      return true
    case 'GET_TODO':
    case 'ADD_TODO':
      return false
    default:
      return state
  }
}
export default reducer
