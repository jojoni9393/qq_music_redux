import React from 'react'
let ItemRecommend = props => {
  return (
    <div className="swiper-slide" style={{ width: '50%' }}>
      <div className="item">
        <a
          href={`https://y.qq.com/n/yqq/album/${
            props.item.jump_info.url
          }.html#stat=y_new.index.focus.click`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={props.item.pic_info.url} alt="" />
        </a>
      </div>
    </div>
  )
}
export default ItemRecommend
