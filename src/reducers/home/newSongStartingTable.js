const reducer = (state = [{ item_id: 99997 }], action) => {
  switch (action.type) {
    case 'GET_NEW_SONG_STARTING_TAB':
      return action.data
    default:
      return state
  }
}
export default reducer
