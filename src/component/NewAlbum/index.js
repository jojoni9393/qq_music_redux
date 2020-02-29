import React from 'react'
import { connect } from 'react-redux'
import { changeNewAlubmTableAcitve, getNewAlbumListAsync } from 'actions'
import MainTitel from 'component/MainTitel'
import IndexTabe from 'component/IndexTabe'
import ItemPlacehold from 'component/ItemPlacehold'
import './index.scss'

let NewAlbum = props => {
  console.log(props, 123)
  return (
    <div className="mod_bg new_album">
      <div className="container_wrap">
        <MainTitel title="新碟首发" />
        <IndexTabe
          Table={props.newAlbumTable}
          TableActive={props.newAlbumTableActive}
          changeTableAcitve={props.changeNewAlubmTableAcitve}
          rightBtn={{
            text: '更多',
            url:
              'https://y.qq.com/portal/album_lib.html#area=1&stat=y_new.index.album.more'
          }}
        />
        <div className="item_container">
          <ul className="item_list">
            {props.newAlbum.map((item, index) => {
              return (
                <ItemPlacehold
                  key={index}
                  height={320}
                  width={'20%'}
                  float={'left'}
                  totalWidth={1220}
                  slidesPerGroup={5}
                  imgUrl={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${
                    item.mid
                  }.jpg?max_age=2592000`}
                  imgHref={`https://y.qq.com/n/yqq/album/${
                    item.mid
                  }.html#stat=y_new.index.album.albumname`}
                  texts={[
                    {
                      type: 'a',
                      name: item.name,
                      href: `https://y.qq.com/n/yqq/album/${
                        item.mid
                      }.html#stat=y_new.index.album.albumname`
                    },
                    { type: 'alist', singers: item.singers }
                  ]}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  //ownProps可以会的路由参数
  // console.log(state.loading)
  return {
    newAlbum: state.newAlbum,
    newAlbumTable: state.newAlbumTable,
    newAlbumTableActive: state.newAlbumTableActive
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
