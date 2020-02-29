//redux
import { createStore, applyMiddleware } from 'redux'
// 导入记录日志的中间件
import logger from 'redux-logger'
// redux 浏览器插件,事件旅行
//需要composeWithDevTools包裹applyMiddleware
import { composeWithDevTools } from 'redux-devtools-extension'
// 导入处理异步数据流的中间件
import thunk from 'redux-thunk'
//导入数九
import rootReducer from './reducers'

const configStore = () => {
  //createStore第二个参数传入state对象可以实现状态保持
  // let state = {
  //   todoList: JSON.parse(localStorage.getItem('todo')) || []
  // }
  const store = createStore(
    rootReducer,
    // state,
    //logger放后面，为洋葱模型最外层
    composeWithDevTools(applyMiddleware(thunk, logger))
  )
  //subscribe数据变化必经之路
  store.subscribe(() => {
    // localStorage.setItem('todo', JSON.stringify(store.getState().todoList))
  })
  return store
}

export default configStore
