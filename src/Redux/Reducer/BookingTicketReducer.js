import dataDanhSachGhe from '../../Data/danhSachGhe.json'

let arrayTemp = dataDanhSachGhe

let stateDefault = {
    danhSachGhe: arrayTemp,
    danhSachGheDangDat: []
}

const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.ghe === action.ghe);
            if (index !== -1) {//Nếu người dùng click ghế đang đặt có trong mảng => remove đi
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {//Nếu người dùng click gghế đang đặt chưa có trong mảng => push vào mảng
                let object = { ghe: action.ghe, gia: action.gia };
                danhSachGheDangDatUpdate.push(object)
            }
            //Cập nhật lại state giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        case 'HUY_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.ghe === action.ghe);
            if (index !== -1) {//Nếu người dùng click gghế đang đặt có trong mảng => remove đi
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        default: return { ...state };
    }
}

export default BookingTicketReducer;