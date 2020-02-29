import React from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import MainTitel from 'component/MainTitel'
import ItemWonderfulRecommendation from 'component/ItemWonderfulRecommendation'

class WonderfulRecommendation extends React.Component {
  componentDidUpdate() {
    if (this.swiper3) {
      this.swiper3.destroy()
    }
    let parameter = {
      //循环
      loop: true,
      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
      autoplay: {
        delay: 20020,
        //户操作swiper之后，是否禁止autoplay。默认为true：停止。
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination3',
        // 允许点击跳转
        clickable: true
      },
      // // //5各一组
      // slidesPerView: 2,
      // slidesPerGroup: 1,
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3'
      }
    }
    if (window.innerWidth > 767) {
      parameter.slidesPerView = 4
      parameter.slidesPerGroup = 1
    } else {
      parameter.slidesPerView = 1
      parameter.slidesPerGroup = 1
    }
    this.swiper3 = new Swiper('.swiper-container3', parameter)
    // this.swiper3.update()
  }

  render() {
    return (
      <div className="recommend_song_swiper mod_bg swiper_mod">
        <div className="container_wrap">
          <MainTitel title="精彩推荐" />
          <div className="swiper-container item_container swiper-container3">
            <div className="swiper-wrapper item_list">
              {this.props.wonderfulRecommendation.map((item, index) => (
                <ItemWonderfulRecommendation item={item} key={index} />
              ))}
            </div>
            <div className="swiper-pagination swiper-pagination3" />
          </div>
        </div>
        <div className="swiper-button-warp">
          <div className="swiper-button-next swiper-button-next3 btn">
            <i className="icon_sprite" />
          </div>
          <div className="swiper-button-prev swiper-button-prev3 btn">
            <i className="icon_sprite" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //ownProps可以会的路由参数
  // console.log(state.loading)
  return {
    wonderfulRecommendation: state.wonderfulRecommendation
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}
WonderfulRecommendation = connect(
  mapStateToProps,
  mapDispatchToProps
)(WonderfulRecommendation)

export default WonderfulRecommendation
