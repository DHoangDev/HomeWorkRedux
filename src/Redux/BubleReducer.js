const stateDefault = {
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
            // console.log('action',action);
            let datCuocArrayUpdate = [...state.datCuocArray];
            //Tạo ra mảng cược mới từ mảng cược cũ và action đc người dùng chọn lên
            datCuocArrayUpdate = datCuocArrayUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true };
                }
                return { ...item, datCuoc: false };
            })
            // console.log('mangCuocUpdate',mangCuocUpdate);
            // // Tìm ra maCuoc để change tương ứng
            // let index = mangCuocUpdate.findIndex(qc=> qc.ma ===action.maCuoc);
            // if(index !== -1){
            //     mangCuocUpdate[index].datCuoc = true;
            // }
            //setState của mangCuoc => render lại giao diện
            state.mangDatCuoc = [...mangCuocUpdate];
            return { ...state }
        }
        case 'RAN_DOM': {
            let numberRandom = Math.floor(Math.random() * 3); // tron mảng có 3 giá trị
            let quanCuocNgauNhien = state.mangDatCuoc[numberRandom];
            state.conputer = { ...quanCuocNgauNhien };
            return { ...state }
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.conputer;
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
            return { ...state };
        }
        default: return { ...state };
    }
}
export default BubleReducer;