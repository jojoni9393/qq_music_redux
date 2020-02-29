import React from 'react'
import './index.scss'
let footer_down = [
  { title: 'PC版', link: '//y.qq.com/download/' },
  { title: 'Mac版', link: '//y.qq.com/download/' },
  { title: 'Android版', link: '//y.qq.com/download/' },
  { title: 'iPhone版', link: '///y.qq.com/download/' }
]
let footer_center = [
  { title: '全民K歌', link: 'https://kg.qq.com/?pgv_ref=qqmusic.y.topmenu' },
  { title: 'Super Sound', link: 'http://y.qq.com/vip/voice_intro/index.html' },
  {
    title: 'QPlay',
    link: 'http://y.qq.com/y/static/down/qplay.html?pgv_ref=qqmusic.y.topmenu'
  }
]
let footer_info = [
  {
    title: 'CJ ENM',
    link: 'https://y.qq.com/portal/company_detail.html?id=297'
  },
  { title: '腾讯视频', link: 'https://v.qq.com/' },
  {
    title: '手机QQ空间',
    link: 'https://qzs.qzone.qq.com/qzone/v6/mobile/html/index.html'
  },
  { title: '最新版QQ', link: 'https://im.qq.com/' },
  { title: '腾讯社交广告', link: '/downloadhttps://e.qq.com/ads/' },
  { title: '电脑管家', link: '/downloadhttps://guanjia.qq.com/' }
]
let foot_copyright = [
  { title: '关于腾讯', link: '/sub' },
  { title: 'About Tencent', link: '/sub' },
  { title: '服务条款', link: '/sub' },
  { title: '用户服务协议', link: '/sub' },
  { title: '隐私政策', link: '/sub' },
  { title: '权利声明', link: '/sub' },
  { title: '广告服务', link: '/sub' },
  { title: '腾讯招聘', link: '/sub' },
  { title: '客服中心', link: '/sub' },
  { title: '网站导航', link: '/sub' }
]

function Footer() {
  return (
    <div className="footer">
      <div className="footer_in">
        <div className="foot_link">
          <ul className="item_img item">
            {footer_down.map((item, index) => {
              return (
                <li className="down" key={index}>
                  {index === 0 ? <h3>下载QQ音乐客户端</h3> : null}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <i className="icon_sprite2" />
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className="item_img item item_center">
            {footer_center.map((item, index) => {
              return (
                <li className="down" key={index}>
                  {index === 0 ? <h3>特色产品</h3> : null}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <i className="icon_sprite2" />
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className="item_info item clearfix">
            {footer_info.map((item, index) => {
              return (
                <li key={index}>
                  {index === 0 ? <h3>合作链接</h3> : null}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="foot_copyright">
          <p>
            {foot_copyright.map((item, index) => {
              return (
                <span key={index}>
                  {index !== 0 ? <span className="line">|</span> : null}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </span>
              )
            })}
          </p>
          <p>
            Copyright © 1998 - 2019 Tencent.{' '}
            <a
              href="http://www.tencent.com/en-us/statement.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              All Rights Reserved.
            </a>
          </p>
          <p>
            腾讯公司{' '}
            <a
              href="http://www.tencent.com/zh-cn/statement.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              版权所有
            </a>{' '}
            <a
              href="http://www.tencent.com/zh-cn/statement.html?/law/copyright.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              腾讯网络文化经营许可证
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
