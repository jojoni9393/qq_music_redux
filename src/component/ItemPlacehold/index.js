import React from 'react'
import MaskImg from 'component/MaskImg'
import Info from 'component/Info'
import styles from './index.module.scss'
const { Item_placehold_wrap, Item_placehold, Item_placehold_in } = styles
let ItemPlacehold = props => {
  return (
    <div
      className={Item_placehold_wrap}
      style={{ width: props.width, float: props.float }}
    >
      <div
        className={Item_placehold}
        style={{
          paddingBottom:
            (props.height / (props.totalWidth / props.slidesPerGroup)) * 100 +
            '%'
        }}
      >
        <div className={Item_placehold_in}>
          <div className="item">
            <MaskImg url={props.imgUrl} href={props.imgHref} />
            <Info text={props.texts} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemPlacehold
