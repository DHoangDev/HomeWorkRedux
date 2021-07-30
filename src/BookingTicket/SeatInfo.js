import React, { Component } from 'react'

import { connect } from 'react-redux'

class SeatInfo extends Component {
    renderArrayGhe = () => {

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
                            <tr>
                                {console.log(this.renderArrayGhe())}
                            </tr>
                            <tr className="text-light" style={{ fontSize: '24px' }}>
                                <td>Tổng Tiền</td>
                                <td>Result</td>
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
        danhSachGheBanDau: state.stateBookingTicket.danhSachGhe
    }
}

export default connect(mapStateToProps)(SeatInfo);