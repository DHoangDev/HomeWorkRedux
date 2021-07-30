import React, { Component } from 'react'

import { connect } from 'react-redux'

class SeatList extends Component {
    renderSoCot = () => {
        return this.props.danhSachGheBanDau.map((ele, index) => {
            if (ele.hang == "") {
                return (
                    <div key={index}>
                        <span><button className="rowNumber" disabled>
                            {ele.hang}
                        </button></span>
                        <span>{
                            ele.danhSachGhe.map((ele, index) => {
                                return <button className="rowNumber ms-2 me-3" key={index} disabled>{ele.soGhe}</button>
                            })
                        }</span>
                    </div>
                )
            }
            else {
                // //ghế đang đặt
                // let cssGheDangDat = '';
                // let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
                // if (indexGheDangDat !== -1) {
                //     cssGheDangDat = 'gheDangChon';
                // }
                return (
                    <div key={index} className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center">
                            <button className="rowNumber" disabled>
                                {ele.hang}
                            </button>
                        </div>
                        <div className="d-flex align-items-center">
                            {
                                ele.danhSachGhe.map((ele, index) => {
                                    if (ele.daDat) {
                                        let cssGheDaDat = 'gheDuocChon'
                                        return (
                                            <button onClick={() => { this.props.datGhe(ele.soGhe) }}
                                                className={`ghe ${cssGheDaDat} ms-2 me-3`}
                                                key={index}>
                                                {ele.soGhe}
                                            </button>
                                        )
                                    }
                                    else {
                                        let cssGheDaDat = '';
                                        return (
                                            <button onClick={() => { this.props.datGhe(ele.soGhe) }}
                                                className={`ghe ${cssGheDaDat} ms-2 me-3`}
                                                key={index}>
                                                {ele.soGhe}
                                            </button>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                )
            }
        })
    }

    renderHangGhe = () => {
        return (
            <div>
                {this.renderSoCot()}
            </div>
        )
    }

    render() {
        return (
            <div className="text-light text-left ml-5 mt-3" style={{ fontSize: '30px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheBanDau: state.stateBookingTicket.danhSachGhe
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         datGhe: (ghe) => {
//             dispatch(datGheAction(ghe));
//         }
//     }
// }
export default connect(mapStateToProps)(SeatList);