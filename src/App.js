import React, { Component } from 'react'

import "./Buble.css";
import "./BaiTapBookingTicket.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import BookingTicket from './BookingTicket/BookingTicket'
import Buble from "./OanTuTi/Buble"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="container-md">
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/BookingTicket" component={BookingTicket} />
              <Route exact path="/Buble" component={Buble} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
