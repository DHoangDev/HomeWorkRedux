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
                                            <button
                                                className={`ghe ${cssGheDaDat} ms-2 me-3`}
                                                key={index}>
                                                {ele.soGhe}
                                            </button>
                                        )
                                    }
                                    else {
                                        let cssGheDaDat = '';
                                        //ghế đang đặt
                                        let cssGheDangDat = '';
                                        let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.ghe === ele.soGhe);
                                        if (indexGheDangDat !== -1) {
                                            cssGheDangDat = 'gheDangChon';
                                        }
                                        return (
                                            <button onClick={() => { this.props.datGhe(ele.soGhe, ele.gia) }}
                                                className={`ghe ${cssGheDaDat} ${cssGheDangDat} ms-2 me-3`}
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
    render() {
        return (
            <div className="text-light text-left ml-5 mt-3" style={{ fontSize: '30px' }}>
                {this.renderSoCot()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheBanDau: state.stateBookingTicket.danhSachGhe,
        danhSachGheDangDat: state.stateBookingTicket.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe, gia) => {
            dispatch({
                type: 'DAT_GHE',
                ghe: ghe,
                gia: gia,
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatList);