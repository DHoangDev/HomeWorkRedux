import React, { Component } from 'react'

import { connect } from 'react-redux'

class SeatInfo extends Component {
    renderArrayGhe = () => {
        return this.props.danhSachGheDangDat.map((ele, index) => {
            return (
                <tr>
                    <td className="ps-4">
                        {ele.ghe}
                    </td>
                    <td className="">
                        {ele.gia}
                    </td>
                    <td>
                        <button className="border-0" style={{ color: "red", backgroundColor: "unset" }} onClick={() => {
                            this.props.huyGhe(ele.ghe)
                        }}>
                            <strong>X</strong>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    renderMangTien = () => {
        let array = this.props.danhSachGheDangDat;
        return array.map((ele, index) => {
            return ele.gia
        })
    }
    renderTongGiaTien = () => {
        let array = this.renderMangTien();
        return array.reduce((result, currentValue) => result + currentValue, 0)
    }

    render() {
        return (
            <div className="px-5">
                <div className="mt-5">
                    <div className="mb-2 d-flex flex-row"><span className="gheDuocChon me-2"></span>
                        <span style={{ fontSize: '22px' }} className="text-light">Ghế Đã Đặt</span></div>
                    <div className="mb-2 d-flex flex-row"><span className="gheDangChon me-2"></span>
                        <span style={{ fontSize: '22px' }} className="text-light">Ghế Đang Đặt</span></div>
                    <div className="mb-2 d-flex flex-row"><span className="ghe me-2" style={{ backgroundColor: 'white' }}></span>
                        <span style={{ fontSize: '22px' }} className="text-light">Ghế Chưa Đặt</span></div>
                </div>
                <div className="mt-5">
                    <table className="table" border="2" style={{ border: '2px solid orange' }}>
                        <thead>
                            <tr className="text-light" style={{ fontSize: '24px' }}>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.renderArrayGhe()}
                            <tr className="text-light" style={{ fontSize: '24px' }}>
                                <td>Tổng Tiền</td>
                                <td>{this.renderTongGiaTien()}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.stateBookingTicket.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (ghe) => {
            dispatch({
                type: 'HUY_GHE',
                ghe: ghe,
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatInfo);