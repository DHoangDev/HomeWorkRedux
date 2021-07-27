import React, { Component } from 'react'

import './Buble.css'

import Player from './Player'
import Result from './Result'
import Computer from './Computer'

import { connect } from 'react-redux'

class Buble extends Component {
    render() {
        return (
            <div className="buble" style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundImage: "url('../video_23_game_oan_tu_ti/bgGame.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="row text-center mt-5">
                    <div className="col-4 mt-2">
                        <Player />
                    </div>
                    <div className="col-4 mt-2">
                        <Result />
                        <button onClick={() => {
                            this.props.playGame()
                        }} className="btn btn-success p-3 display-4 mt-5">Play game</button>
                    </div>
                    <div className="col-4 mt-2">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 1;
            //Khai báo hàm lặp đi lập lại
            let ranDomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'

                })
                count++;
                if (count > 10) {
                    //dừng setInterval      
                    clearInterval(ranDomComputerItem);

                    dispatch({
                        type: 'END_GAME',
                    })

                }
            }, 100)

        }
    }
}

export default connect(null, mapDispatchToProps)(Buble)