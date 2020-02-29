import React from 'react'
import {
  Route,
  Redirect,
  Switch,
  NavLink,
  Link,
  withRouter
} from 'react-router-dom'
import SubNav from 'component/SubNav'
import logoImg from 'assets/images/logo.png'
import markImg from 'assets/images/mark_1.png'
import userImg from 'assets/images/user.jpg'
import './index.scss'
let top_nav = [
  { title: '音乐馆', link: '/sub' },
  { title: '我的音乐', link: '/my_music' },
  { title: '客户端', link: '/download', vip: true },
  { title: '音乐号', link: '/music_id' },
  { title: 'VIP', link: '/vip' }
]

function Header() {
  return (
    <div className="header">
      <div className="section_inner">
        <h1 className="logo">
          <Link className="active" to="/all">
            <img src={logoImg} alt="" />
          </Link>
        </h1>
        <ul className="top_nav">
          {top_nav.map(item => {
            if (item.vip) {
              return (
                <li key={item.title}>
                  <NavLink activeClassName="active" to={item.link}>
                    {item.title}
                  </NavLink>
                  <i>
                    <img src={markImg} alt="" />
                  </i>
                </li>
              )
            } else {
              return (
                <li key={item.title}>
                  <NavLink activeClassName="active" to={item.link}>
                    {item.title}
                  </NavLink>
                </li>
              )
            }
          })}
        </ul>
        <div className="search_wrap">
          <div className="search_placehold">
            <div className="search">
              <input type="text" placeholder="搜索音乐、MV、歌单、用户" />
              <div className="right">
                <i className="icon_sprite" />
              </div>
            </div>
          </div>
        </div>
        <Link className="user_img" to="/all">
          <img src={userImg} alt="" />
        </Link>
        <Link className="open_vip btn" to="/all">
          开通豪华绿砖
        </Link>
        <Link className="open_music btn" to="/all">
          开通付费包
        </Link>
      </div>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/sub/index" />} />
        <Route exact path="/sub" render={() => <Redirect to="/sub/index" />} />
        <Route path="/sub" component={SubNav} />
      </Switch>
    </div>
  )
}

export default withRouter(Header)
