const reducer = (state = [{ item_id: 99998 }], action) => {
  switch (action.type) {
    case 'GET_NEW_ALBUM_TAB':
      return action.data
    default:
      return state
  }
}
export default reducer
