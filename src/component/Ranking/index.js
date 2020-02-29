import React from 'react'
import { connect } from 'react-redux'
import { changeNewAlubmTableAcitve, getNewAlbumListAsync } from 'actions'
import MainTitel from 'component/MainTitel'
import styles from './index.module.scss'
const {
  ranking,
  ranking_list,
  wrap_item,
  rangking_item,
  img,
  h3,
  wrap_img_play,
  img_play,
  line_play,
  info_list,
  info,
  num,
  title
} = styles
let NewAlbum = props => {
  return (
    <div className={`mod_bg ${ranking}`}>
      <div className="container_wrap">
        <MainTitel
          title="排行版"
          rightBtn={{
            text: '更多',
            url:
              'https://y.qq.com/n/yqq/toplist/4.html#-1&stat=y_new.index.toplist.more'
          }}
        />
        <ul className={ranking_list}>
          {props.ranking.map(item => {
            return (
              <li className={wrap_item} key={item.topId}>
                <div className={rangking_item}>
                  <div className={img} />
                  <div className={h3}>
                    <span>巅峰版</span>
                    <h3>
                      <a href="1">
                        {item.title.substring(0, item.title.length - 1)}
                      </a>
                    </h3>
                  </div>
                  <div className={wrap_img_play}>
                    <i className={line_play} />
                    <i className={img_play} />
                  </div>
                  <ul className={info_list}>
                    {item.song.map((item2, index2) => {
                      return (
                        <li className={info} key={index2}>
                          <div className={num}>
                            <span>{index2 + 1}</span>
                          </div>
                          <div className={`one-txt-cut ${title}`}>
                            <a href="1">{item2.title}</a>
                          </div>
                          <div className={`one-txt-cut`}>
                            <a href="1">{item2.singerName}</a>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  //ownProps可以会的路由参数
  // console.log(state.loading)
  return {
    ranking: state.ranking
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeNewAlubmTableAcitve(id) {
      dispatch(changeNewAlubmTableAcitve(id))
      dispatch(getNewAlbumListAsync(id))
    }
  }
}
NewAlbum = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAlbum)

export default NewAlbum
