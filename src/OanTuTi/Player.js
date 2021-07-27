import React, { Component } from 'react'

import './Buble.css'

import { connect } from 'react-redux'

class Player extends Component {

    renderDatCuoc = () => {
        return this.props.datCuocArray.map((ele, index) => {
            let border = {};
            if (ele.datCuoc) {
                border = { border: '3px solid orange' };
            }

            return <div className="col-4" key={index}>
                <button onClick={() => {
                    this.props.datCuoc(ele.ma)
                }} style={border} className="btnBuble">
                    <img style={{ width: 50, height: 50 }} src={ele.hinhAnh} alt="..." />
                </button>
            </div>
        })
    }

    render() {
        return (
            <div className="d-flex justify-content-center flex-column align-items-center">
                <div className="select">
                    <img className="mt-4" width={70} src={this.props.datCuocArray.find(item => item.datCuoc === true).hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./video_23_game_oan_tu_ti/player.png" alt="..." />
                <div className="row">
                    {this.renderDatCuoc()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        datCuocArray: state.BaiTapOanTuXiReducer.datCuocArray,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)