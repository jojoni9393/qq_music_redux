import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

let sub_nav = [
  { title: '首页', link: '/sub/index' },
  { title: '歌手', link: '/sub/singer' },
  { title: '新碟', link: '/sub/new_song' },
  { title: '排行版', link: '/sub/ranking' },
  { title: '分类歌单', link: '/sub/classify' },
  { title: '电台', link: '/sub/radio ' },
  { title: 'MV', link: '/sub/mv' },
  { title: '数字专辑', link: '/sub/album' },
  { title: '票务', link: '/sub/ticket' }
]
function SubNav() {
  return (
    <div className="sub_nav_wrap">
      <ul className="sub_nav">
        {sub_nav.map(item => {
          return (
            <li key={item.title}>
              <NavLink activeClassName="active" to={item.link}>
                {item.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SubNav
