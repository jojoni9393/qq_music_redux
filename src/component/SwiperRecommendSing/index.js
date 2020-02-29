import React from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import {
  changeSongRecommendTableAcitve,
  getSongRecommendListAsync
} from 'actions'
import MainTitel from 'component/MainTitel'
import IndexTabe from 'component/IndexTabe'
import ItemPlacehold from 'component/ItemPlacehold'

class SwiperRecommend extends React.Component {
  componentDidUpdate() {
    if (this.swiper1) {
      this.swiper1.destroy()
    }
    this.swiper1 = new Swiper('.swiper-container1', {
      //循环
      loop: true,
      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
      autoplay: {
        delay: 200220,
        //户操作swiper之后，是否禁止autoplay。默认为true：停止。
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination1',
        // 允许点击跳转
        clickable: true
      },
      // //5各一组
      slidesPerView: 5,
      slidesPerGroup: 5,
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1'
      }
    })
    // this.swiper1.update()
  }

  render() {
    return (
      <div className="recommend_song_swiper mod_bg swiper_mod">
        <div className="container_wrap">
          <MainTitel title="推荐歌曲" />
          <IndexTabe
            Table={this.props.songRecommendTable}
            TableActive={this.props.songRecommendTableActive}
            changeTableAcitve={this.props.changeSongRecommendTableAcitve}
          />
          <div className="swiper-container item_container swiper-container1">
            <div className="swiper-wrapper item_list">
              {this.props.songRecommend.map((item, index) => (
                <div
                  className="swiper-slide"
                  style={{ width: '20%' }}
                  key={index}
                >
                  <ItemPlacehold
                    key={index}
                    height={320}
                    totalWidth={1220}
                    slidesPerGroup={5}
                    imgUrl={item.cover_url_medium}
                    imgHref={`https://y.qq.com/n/yqq/playsquare/${
                      item.tid
                    }.html#stat=y_new.index.playlist.name`}
                    texts={[
                      {
                        type: 'a',
                        name: item.title,
                        href: `https://y.qq.com/n/yqq/playsquare/${
                          item.tid
                        }.html#stat=y_new.index.playlist.name`
                      },
                      {
                        type: 'span',
                        name: item.access_num
                          ? `播放量：${
                              item.access_num > 10000
                                ? (item.access_num / 10000).toFixed(1) + '万'
                                : item.access_num
                            }`
                          : ''
                      }
                    ]}
                  />
                </div>
              ))}
            </div>
            <div className="swiper-pagination swiper-pagination1" />
          </div>
        </div>
        <div className="swiper-button-warp">
          <div className="swiper-button-next swiper-button-next1 btn">
            <i className="icon_sprite" />
          </div>
          <div className="swiper-button-prev swiper-button-prev1 btn">
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
    songRecommendTableActive: state.songRecommendTableActive,
    songRecommendTable: state.songRecommendTable,
    songRecommend: state.songRecommend
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeSongRecommendTableAcitve(id) {
      dispatch(changeSongRecommendTableAcitve(id))
      dispatch(getSongRecommendListAsync(id))
    }
  }
}
SwiperRecommend = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwiperRecommend)

export default SwiperRecommend
