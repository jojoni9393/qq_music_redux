import React from 'react'
import styles from './index.module.scss'
const {
  main_search,
  top,
  search_wrap,
  active,
  search,
  btn,
  tag,
  tag_title,
  tag_list,
  main,
  person_info,
  img,
  right,
  tab_list
} = styles

function MainSearch() {
  return (
    <div className={main_search}>
      <div className={top}>
        <div className={`${search_wrap} ${active}`}>
          <div className={search}>
            <input type="text" />
            <div className={btn}>
              <i className="icon_sprite" />
            </div>
          </div>
        </div>
        <div className={tag}>
          <span className={tag_title}>热门搜索：</span>
          <ul className={tag_list}>
            <li>
              <a href="/">热门搜索</a>
            </li>
            <li>
              <a href="/">热门搜索</a>
            </li>
            <li>
              <a href="/">热门搜索</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={main}>
        <div className={person_info}>
          <div className={img}>
            <img src="" alt="" />
          </div>
          <div className={right}>
            <ul>
              <li>
                <a href="/">周杰伦</a>
              </li>
              <li>
                <a href="/">周杰伦</a>
              </li>
              <li>
                <a href="/">周杰伦</a>
              </li>
              <li>
                <a href="/">周杰伦</a>
              </li>
            </ul>
            <div className={btn}>
              <i className="icon_sprite" />
              <span>播放歌手热门歌曲</span>
            </div>
          </div>
        </div>
        <ul className={tab_list}>
          <li>单曲</li>
          <li>专辑</li>
          <li>MV</li>
          <li>歌单</li>
          <li>用户</li>
          <li>歌词</li>
        </ul>
      </div>
    </div>
  )
}

export default MainSearch
