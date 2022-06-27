import './App.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs';
import React, { Component } from 'react';
import MenuComponent from './components/MenuComponent';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            dropdownOpen: false,
            numberColumn: "col-md-4"
        };
    }
    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        })
    }
    handleClick = (event) => {
        console.log(event.target.value)
        this.setState({
            numberColumn: event.target.value,
        });
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ung dung quan ly nhan su 1.0v</NavbarBrand>
                    </div>
                </Navbar>
                <div className='d-flex'>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Chọn cột
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem value="col-md-12" onClick={this.handleClick} >
                            1 cột
                        </DropdownItem>
                        <DropdownItem value="col-md-6" onClick={this.handleClick}>
                            2 cột
                        </DropdownItem>
                        <DropdownItem value="col-md-4" onClick={this.handleClick}>
                            3 cột
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <MenuComponent staffs={this.state.staffs} column={this.state.numberColumn} />
                </div>
            </div>
        );
    }
}

export default App;
