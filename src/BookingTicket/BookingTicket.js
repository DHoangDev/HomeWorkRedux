import React, { Component } from 'react'

import './BaiTapBookingTicket.css'

import dataDanhSachGhe from '../Data/danhSachGhe.json'
import SeatList from './SeatList'
import SeatInfo from './SeatInfo'

export default class BookingTicket extends Component {

    renderHangGhe = () => {
        return dataDanhSachGhe.map((hangGhe, index) => {
            return <div key={index}>
                <SeatList hangGhe={hangGhe} soHangGhe={index} />
            </div>

        })
    }

    render() {
        return (
            <div className="bookingMovie" style={{ position: "fixed", width: '100%', height: '100%', backgroundImage: "url('./video27_dat_ve_phim/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mt-2 text-center text-warning" style={{ fontSize: '25px' }}>ĐẶT VÉ XEM PHIM</div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mt-2 text-center text-light" style={{ fontSize: '25px' }}>Màn Hình</div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mt-2 d-flex flex-column px-5">
                                            <div className="screen"></div>
                                            {this.renderHangGhe()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="text-light mt-2 text-center" style={{ fontSize: '25px' }}>DANH SÁCH CHỌN GHẾ</div>
                                <SeatInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
