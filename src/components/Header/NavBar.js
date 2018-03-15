import React, { Component } from 'react';
import { NavbarToggler, Collapse } from 'reactstrap';
import StyledNav from './StyledNav';
import StyledNavbar from './StyledNavbar';
import StyledNavItem from './StyledNavItem';
import StyledNavbarBrand from './StyledNavbarBrand';
import SignupText from './SignupText';
import Logo from './Logo';
import logo from './logo.svg';

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
          <StyledNavbarBrand href="/">
            <Logo src={logo} />
          </StyledNavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <StyledNav className="ml-auto" navbar>
              <StyledNavItem>
                <SignupText>Listen</SignupText>
              </StyledNavItem>
              <StyledNavItem>
                <SignupText>|</SignupText>
              </StyledNavItem>
              <StyledNavItem>
                <SignupText>About</SignupText>
              </StyledNavItem>
            </StyledNav>
          </Collapse>
        </StyledNavbar>
      </div>
    );
  }
}

export default NavBar;
