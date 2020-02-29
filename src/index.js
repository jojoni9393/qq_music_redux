import React from 'react'
import { render } from 'react-dom'
//Provider 链接redux与react
import { Provider } from 'react-redux'
//configStore 为 redux数据
import configStore from './configStore'

import App from './App'

import 'swiper/dist/css/swiper.min.css'
import './index.scss'
let store = configStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
