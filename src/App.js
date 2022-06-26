import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs';
import React, { Component } from 'react';
import MenuComponent from './components/MenuComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ung dung quan ly nhan su 1.0v</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
