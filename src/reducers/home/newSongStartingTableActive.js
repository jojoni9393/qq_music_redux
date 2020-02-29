const reducer = (state = 5, action) => {
  switch (action.type) {
    case 'GET_NEW_SONG_STARTING_TAB_ACTIVE':
      return action.id
    default:
      return state
  }
}
export default reducer
