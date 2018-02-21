import React, { Component } from 'react';
import { NavbarToggler, Collapse } from 'reactstrap';
import StyledNav from './StyledNav';
import StyledNavbar from './StyledNavbar';
import StyledNavItem from './StyledNavItem';
import SignupButton from './SignupButton';
import StyledNavbarBrand from './StyledNavbarBrand';
import SignupText from './SignupText';
//import Logo from './Logo'
//import logo from './logo.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    let isOpenState = this.state.isOpen;
    this.setState({ isOpen: !isOpenState });
  }

  render() {
    return (
      <div>
        <StyledNavbar expand="md" className="fixed-top">
          <StyledNavbarBrand href="/">DIZUR</StyledNavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <StyledNav className="ml-auto" navbar>
              <StyledNavItem>
                <SignupButton href="https://github.com/reactstrap/reactstrap">
                  <SignupText>Sign up</SignupText>
                </SignupButton>
              </StyledNavItem>
            </StyledNav>
          </Collapse>
        </StyledNavbar>
      </div>
    );
  }
}

export default NavBar;
