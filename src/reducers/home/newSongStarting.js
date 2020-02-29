const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_NEW_SONG_STARTING':
      return action.data
    default:
      return state
  }
}

export default reducer
