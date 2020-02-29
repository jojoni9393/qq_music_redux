import axios from 'axios'

//获得为你推荐
const getSongRecommend = data => ({ type: 'GET_SONG_RECOMMEND', data })
const getWonderfulRecommendation = data => ({
  type: 'GET_WONDERFUL_RECOMMENDATION',
  data
})
//获得为你推荐tab
const getSongRecommendTable = data => ({ type: 'GET_SONG_RECOMMEND_TAB', data })
//改变为你推荐tab_active
const changeSongRecommendTableAcitve = id => ({
  type: 'GET_SONG_RECOMMEND_TAB_ACTIVE',
  id
})

//获得新歌首发tab
const getNewSongStartingTable = data => ({
  type: 'GET_NEW_SONG_STARTING_TAB',
  data
})
//改变新歌首发tab_active
const changeNewSongStartingTableActive = id => ({
  type: 'GET_NEW_SONG_STARTING_TAB_ACTIVE',
  id
})
//获得新歌首发列表
const getNewSongStarting = data => ({ type: 'GET_NEW_SONG_STARTING', data })

//获得新碟首发tab
const getNewAlubmTable = data => ({ type: 'GET_NEW_ALBUM_TAB', data })
//改变新碟首发tab_active
const changeNewAlubmTableAcitve = id => ({
  type: 'GET_NEW_ALBUM_TAB_ACTIVE',
  id
})
//获得新碟首发列表
const getNewAlubm = data => ({ type: 'GET_NEW_ALBUM', data })

//获得排行版列表
const ranking = data => ({ type: 'GET_RANKING', data })

//获取首页数据
const getIndexDataAsync = () => {
  // 返回dispatch，作为参数
  return async dispatch => {
    let res = await axios({
      url:
        '/api/cgi-bin/musicu.fcg?-=recom5805716970472001&g_tk=5381&loginUin=1152921504689975353&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22newsong.NewSongServer%22%2C%22method%22%3A%22get_new_song_info%22%2C%22param%22%3A%7B%22type%22%3A5%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22newalbum.NewAlbumServer%22%2C%22method%22%3A%22get_new_album_info%22%2C%22param%22%3A%7B%22area%22%3A1%2C%22sin%22%3A0%2C%22num%22%3A10%7D%7D%2C%22new_album_tag%22%3A%7B%22module%22%3A%22newalbum.NewAlbumServer%22%2C%22method%22%3A%22get_new_album_area%22%2C%22param%22%3A%7B%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetAll%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D'
    })
    {
      let data = res.data.recomPlaylist.data.v_hot.slice(0, 10)
      let newData = data.map(item => {
        item.cover_url_medium = item.cover
        item.access_num = item.listen_num
        item.tid = item.content_id
        return item
      })
      dispatch(getSongRecommend(newData))
      dispatch(
        getSongRecommendTable([
          { item_id: 99999, item_name: '为你推荐' },
          ...res.data.category.data.category[0].items.slice(0, 5)
        ])
      )
    }
    //新歌首发
    {
      let data = res.data.new_song.data.lanlist
      let newData = data.map(item => {
        item.item_id = item.type
        item.item_name = item.lan
        return item
      })
      dispatch(getNewSongStartingTable(newData))
      let data2 = res.data.new_song.data.songlist
      let newData2 = [[]]
      data2.forEach(item => {
        newData2[newData2.length - 1].push(item)
        if (newData2[newData2.length - 1].length === 9) {
          newData2.push([])
          return
        }
      })
      dispatch(getNewSongStarting(newData2.slice(0, 4)))
    }
    //新碟首发
    {
      let data = res.data.new_album_tag.data.area
      let newData = data.map(item => {
        item.item_id = item.id
        item.item_name = item.name
        return item
      })
      dispatch(getNewAlubmTable(newData))
      dispatch(getNewAlubm(res.data.new_album.data.albums))
    }

    //精彩推荐
    dispatch(getWonderfulRecommendation(res.data.focus.data.content))
    //排行版
    {
      let data = res.data.toplist.data.group
      let newData = data[0].toplist.slice(0, 3)
      newData = newData.concat(data[1].toplist.slice(3, 5))
      dispatch(ranking(newData))
    }
  }
}

export {
  getIndexDataAsync,
  //推荐歌曲
  changeSongRecommendTableAcitve,
  getSongRecommendListAsync,
  //新歌首发
  changeNewSongStartingTableActive,
  getNewSongStartingListAsync,
  //新碟首发
  changeNewAlubmTableAcitve,
  getNewAlbumListAsync
}
