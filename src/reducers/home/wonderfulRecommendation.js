const reducer = (
  state = [
    {
      pic_info: { url: 'http://iph.href.lu/590x236?text=music' },
      jump_info: { url: 'http://iph.href.lu/590x236?text=music' }
    },
    {
      pic_info: { url: 'http://iph.href.lu/590x236?text=music' },
      jump_info: { url: 'http://iph.href.lu/590x236?text=music' }
    }
  ],
  action
) => {
  switch (action.type) {
    case 'GET_WONDERFUL_RECOMMENDATION':
      return action.data
    default:
      return state
  }
}

export default reducer
