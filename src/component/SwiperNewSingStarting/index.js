import React from 'react'
import { connect } from 'react-redux'
import Swiper2 from 'swiper/dist/js/swiper.js'
import {
  changeNewSongStartingTableActive,
  getNewSongStartingListAsync
} from 'actions'
import MainTitel from 'component/MainTitel'
import IndexTabe from 'component/IndexTabe'
import ItemrNewSingStarting from 'component/ItemrNewSingStarting'

class SwiperRecommend extends React.Component {
  componentDidUpdate() {
    if (this.swiper2) {
      this.swiper2.destroy()
    }
    this.swiper2 = new Swiper2('.swiper-container2', {
      //循环
      loop: true,
      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
      autoplay: {
        delay: 200220,
        //户操作swiper之后，是否禁止autoplay。默认为true：停止。
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination2',
        // 允许点击跳转
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
      }
    })
  }

  render() {
    return (
      <div className="new_sing_starting_swiper mod_bg swiper_mod">
        <div className="container_wrap">
          <MainTitel title="新歌首发" />
          <IndexTabe
            Table={this.props.newSongStartingTable}
            TableActive={this.props.newSongStartingTableActive}
            changeTableAcitve={this.props.changeNewSongStartingTableActive}
            leftBtn={{
              text: '播放全部',
              url:
                'https://y.qq.com/portal/album_lib.html#area=1&stat=y_new.index.album.more'
            }}
          />
          <div className="swiper-container item_container swiper-container2 ">
            <div className="swiper-wrapper item_list">
              {this.props.newSongStarting.map((item, index) => (
                <ItemrNewSingStarting item={item} key={index} />
              ))}
            </div>
            <div className="swiper-pagination swiper-pagination2" />
          </div>
        </div>
        <div className="swiper-button-warp">
          <div className="swiper-button-next swiper-button-next2 btn">
            <i className="icon_sprite" />
          </div>
          <div className="swiper-button-prev swiper-button-prev2 btn">
            <i className="icon_sprite" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //ownProps可以会的路由参数
  return {
    newSongStarting: state.newSongStarting,
    newSongStartingTable: state.newSongStartingTable,
    newSongStartingTableActive: state.newSongStartingTableActive
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeNewSongStartingTableActive(id) {
      dispatch(changeNewSongStartingTableActive(id))
      dispatch(getNewSongStartingListAsync(id))
    }
  }
}
SwiperRecommend = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwiperRecommend)

export default SwiperRecommend
