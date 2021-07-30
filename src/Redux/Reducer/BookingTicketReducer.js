import dataDanhSachGhe from '../../Data/danhSachGhe.json'

let arrayTemp = dataDanhSachGhe

let stateDefault = {
    danhSachGhe: arrayTemp
}

const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        default: return { ...state };
    }
}

export default BookingTicketReducer;