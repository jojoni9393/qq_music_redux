const reducer = (state = 99999, action) => {
  switch (action.type) {
    case 'GET_SONG_RECOMMEND_TAB_ACTIVE':
      return action.id
    default:
      return state
  }
}
export default reducer
