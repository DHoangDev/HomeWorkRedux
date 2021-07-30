import React, { Component } from 'react'

import { connect } from "react-redux"

class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.result}</div>
                <div className="display-4 text-success">Số Lượt Thắng: <span className="text-warning">
                    {this.props.soBanThang}</span></div>
                <div className="display-4 text-success">Tổng số bàn chơi: <span className="text-warning">
                    {this.props.soBanChoi}</span></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        result: state.stateBuble.result,
        soBanThang: state.stateBuble.soBanThang,
        soBanChoi: state.stateBuble.soBanChoi,
    }
}
export default connect(mapStateToProps)(Result)