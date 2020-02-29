const reducer = (state = 1, action) => {
  switch (action.type) {
    case 'GET_NEW_ALBUM_TAB_ACTIVE':
      return action.id
    default:
      return state
  }
}
export default reducer
