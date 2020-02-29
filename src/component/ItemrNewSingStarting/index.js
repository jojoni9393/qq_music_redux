import React from 'react'
import MaskImg from 'component/MaskImg'
// import Info from 'component/MaskImg'
import './index.scss'

let ItemRecommend = props => {
  return (
    <div className="swiper-slide item_new_sing_starting">
      {props.item.map((item2, index) => {
        return (
          <div className="item_wrap" key={index}>
            <div className="item box">
              <div className="img_wrap">
                <MaskImg
                  url={`https://y.gtimg.cn/music/photo_new/T002R90x90M000${
                    item2.album.mid
                  }.jpg?max_age=2592000`}
                  href={`https://y.qq.com/n/yqq/album/${item2.album.mid}.html`}
                  size="small"
                />
              </div>

              <div className="info">
                <h4 className="playlist__title one-txt-cut">
                  <a
                    href={`https://y.qq.com/n/yqq/album/${
                      item2.album.mid
                    }.html#stat=y_new.index.album.albumname`}
                  >
                    {item2.name}
                  </a>
                </h4>
                <div className="playlist__other one-txt-cut">
                  {item2.singer
                    ? item2.singer.map((item2, index2) => {
                        return (
                          <span key={index2}>
                            {index2 > 0 ? (
                              <span className="line">/</span>
                            ) : null}
                            <a
                              href={`https://y.qq.com/n/yqq/singer/${
                                item2.mid
                              }.html#stat=y_new.index.album.singername`}
                            >
                              {item2.name}
                            </a>
                          </span>
                        )
                      })
                    : null}
                </div>
              </div>
              <span className="time">
                0{(item2.interval / 60) | 0}:
                {item2.interval % 60 >= 10
                  ? item2.interval % 60
                  : '0' + (item2.interval % 60)}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ItemRecommend
