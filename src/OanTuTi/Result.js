import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.ketQua}</div>
                <div className="display-4 text-success">Số Lượt Thắng: <span className="text-warning">
                    {this.props.soBanThang}</span></div>
                <div className="display-4 text-success">Tổng số bàn chơi: <span className="text-warning">
                    {this.props.soBanChoi}</span></div>
            </div>
        )
    }
}
