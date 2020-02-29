const reducer = (state = [{ item_id: 99999 }], action) => {
  switch (action.type) {
    case 'GET_SONG_RECOMMEND_TAB':
      return action.data
    default:
      return state
  }
}
export default reducer
