import React from 'react'
import styles from './index.module.scss'
const { wrap_main_title, main_title, right_btn } = styles
function MainTitel(props) {
  return (
    <div className={wrap_main_title}>
      <h3 className={main_title}>{props.title}</h3>
      {props.rightBtn ? (
        <a className={right_btn} href={props.rightBtn.url}>
          {props.rightBtn.text}
          <i className="icon_sprite" />
        </a>
      ) : null}
    </div>
  )
}

export default MainTitel
