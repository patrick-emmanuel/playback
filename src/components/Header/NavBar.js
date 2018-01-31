import React, { Component } from 'react';
import { NavbarToggler, Collapse } from 'reactstrap';
import StyledNav from './StyledNav';
import StyledNavbar from './StyledNavbar';
import StyledNavItem from './StyledNavItem';
import StyledNavLink from './StyledNavLink';
import StyledNavbarBrand from './StyledNavbarBrand';
import Separator from './Separator';

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
    return <div>
        <StyledNavbar expand="md">
          <StyledNavbarBrand href="/">Spotify</StyledNavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <StyledNav className="ml-auto" navbar>
              <StyledNavItem>
                <StyledNavLink href="/components/">Premium</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink href="/components/">Help</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink href="/components/">Download</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <Separator>|</Separator>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink href="/components/">Sign up</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink href="https://github.com/reactstrap/reactstrap">
                  Log In
                </StyledNavLink>
              </StyledNavItem>
            </StyledNav>
          </Collapse>
        </StyledNavbar>
      </div>;
  }
}

export default NavBar;
