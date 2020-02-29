import React from 'react'
import styles from './index.module.scss'
const { mask_img, imgMask, palyImg, palyImgBig, palyImgSmall } = styles
let ItemRecommend = props => {
  return (
    <div className={mask_img}>
      <a href={props.href}>
        <img src={props.url} alt="" />
        <i className={imgMask} />
        <i
          className={`${palyImg} ${
            !props.size || props.size === 'big' ? palyImgBig : palyImgSmall
          }`}
        />
      </a>
    </div>
  )
}
export default ItemRecommend
