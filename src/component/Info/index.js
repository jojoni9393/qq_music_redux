import React from 'react'
import styles from './index.module.scss'
const { info, line, singer } = styles
let Info = props => {
  return (
    <div className={info}>
      {props.text.map((item, index) => {
        return (
          <div className="one-txt-cut" key={index}>
            {item.type === 'span' ? (
              <span>{item.name}</span>
            ) : item.type === 'alist' ? (
              item.singers.map((item2, index2) => {
                return (
                  <span key={index2}>
                    {index2 > 0 ? <span className={line}>/</span> : null}
                    <a
                      href={`https://y.qq.com/n/yqq/singer/${
                        item2.mid
                      }.html#stat=y_new.index.album.singername`}
                      className={singer}
                    >
                      {item2.name}
                    </a>
                  </span>
                )
              })
            ) : (
              <a href={item.href}>{item.name}</a>
            )}
          </div>
        )
      })}
    </div>
  )
}
export default Info
