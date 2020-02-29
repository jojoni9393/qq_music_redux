//合并所有reduce
import { combineReducers } from 'redux'
import songRecommend from './home/songRecommend'
import songRecommendTable from './home/songRecommendTable'
import songRecommendTableActive from './home/songRecommendTableActive'
import wonderfulRecommendation from './home/wonderfulRecommendation'
import newAlbum from './home/newAlbum'
import newAlbumTable from './home/newAlbumTable'
import newAlbumTableActive from './home/newAlbumTableActive'
import newSongStarting from './home/newSongStarting'
import newSongStartingTable from './home/newSongStartingTable'
import newSongStartingTableActive from './home/newSongStartingTableActive'
import ranking from './home/ranking'

//combineReducers 用来合并所有的reducer
const rootReducer = combineReducers({
  songRecommend,
  songRecommendTable,
  songRecommendTableActive,
  wonderfulRecommendation,
  newAlbum,
  newAlbumTable,
  newAlbumTableActive,
  newSongStarting,
  newSongStartingTable,
  newSongStartingTableActive,
  ranking
})
//导出，传给configStore
export default rootReducer
