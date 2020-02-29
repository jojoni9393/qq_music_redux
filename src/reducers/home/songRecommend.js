const reducer = (
  state = [
    { cover_url_medium: 'http://iph.href.lu/300x300?text=music' },
    { cover_url_medium: 'http://iph.href.lu/300x300?text=music' },
    { cover_url_medium: 'http://iph.href.lu/300x300?text=music' },
    { cover_url_medium: 'http://iph.href.lu/300x300?text=music' },
    { cover_url_medium: 'http://iph.href.lu/300x300?text=music' }
  ],
  action
) => {
  switch (action.type) {
    case 'GET_SONG_RECOMMEND':
      return action.data
    default:
      return state
  }
}

export default reducer
