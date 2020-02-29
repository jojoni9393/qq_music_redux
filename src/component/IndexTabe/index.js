import React from 'react'
import './index.scss'

let IndexTabe = props => {
  return (
    <div className="mod_index_tab_wrap">
      {props.leftBtn ? (
        <a className="left_btn" href={props.leftBtn.url}>
          <i className="icon_sprite" />
          {props.leftBtn.text}
        </a>
      ) : null}

      <ul className="mod_index_tab">
        {props.Table.map(item => (
          <li
            className={props.TableActive === item.item_id ? 'active' : ''}
            id={item.item_id}
            key={item.item_id}
            onClick={() => props.changeTableAcitve(item.item_id)}
          >
            {item.item_name}
          </li>
        ))}
      </ul>
      {props.rightBtn ? (
        <a className="right_btn" href={props.rightBtn.url}>
          {props.rightBtn.text}
          <i className="icon_sprite" />
        </a>
      ) : null}
    </div>
  )
}

export default IndexTabe
