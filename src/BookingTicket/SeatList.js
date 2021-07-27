import React, { Component } from 'react'

export default class SeatList extends Component {
    renderGhe = () => {
        return 10
    }


    renderSoHang = () => {
        return 20
    }

    renderHangGhe = () => {
        return 'no'
    }

    render() {
        return (
            <div className="text-light text-left ml-5 mt-3" style={{ fontSize: '30px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}
