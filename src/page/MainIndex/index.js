import React from 'react'
import { connect } from 'react-redux'
import { getIndexDataAsync } from 'actions'
import SwiperRecommendSing from 'component/SwiperRecommendSing'
import SwiperNewSingStarting from 'component/SwiperNewSingStarting'
import WonderfulRecommendation from 'component/WonderfulRecommendation'
import NewAlbum from 'component/NewAlbum'
import Ranking from 'component/Ranking'
class IndexMain extends React.Component {
  componentDidMount() {
    this.props.getIndexDataAsync()
  }
  render() {
    return (
      <div className="main">
        <SwiperRecommendSing />
        <SwiperNewSingStarting />
        <WonderfulRecommendation />
        <NewAlbum />
        <Ranking />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //ownProps可以会的路由参数
  // console.log(state.loading)
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getIndexDataAsync() {
      dispatch(getIndexDataAsync())
    }
  }
}
IndexMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexMain)

export default IndexMain
