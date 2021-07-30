let stateDefault = {
    datCuocArray: [
        { ma: 'keo', hinhAnh: './video_23_game_oan_tu_ti/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './video_23_game_oan_tu_ti/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './video_23_game_oan_tu_ti/bao.png', datCuoc: false },
    ],
    result: 'I am iron man, i love you 3000 !!!',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './video_23_game_oan_tu_ti/bao.png' },
}

const BubleReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let datCuocArrayUpdate = [...state.datCuocArray];
            datCuocArrayUpdate = datCuocArrayUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true };
                }
                return { ...item, datCuoc: false };
            })
            state.datCuocArray = [...datCuocArrayUpdate];
            return { ...state }
        }
        case 'RAN_DOM': {
            let numberRandom = Math.floor(Math.random() * 3); // tron mảng có 3 giá trị
            let quanCuocNgauNhien = state.datCuocArray[numberRandom];
            state.computer = { ...quanCuocNgauNhien };
            return { ...state }
        }
        case 'END_GAME': {
            let player = state.datCuocArray.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hòa nhau !!!'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'thua rồi !!!'
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'I am iron man, i love you 3000 !!!'
                    }
                    ; break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = 'I am iron man, i love you 3000 !!!'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'hòa nhau !!!'
                    } else {
                        state.ketQua = 'thua rồi !!!'
                    }
                    ; break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'thua rồi !!!'
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = 'I am iron man, i love you 3000 !!!'
                    } else {
                        state.ketQua = 'hòa nhau !!!'
                    }
                    ; break;
                default: state.ketQua = 'error !!!';
            }
            state.soBanChoi += 1;
            return { ...state }
        }
        default: return { ...state }
    }
}

export default BubleReducer;