import React from 'react';
import Icons from './Icons';
import NavLink from '../NavLink';

const Menu = ({ menu }) => (
  <NavLink to={menu.path}>
    <Icons className={menu.iconClassName} name={menu.iconName} />
    {menu.name}
  </NavLink>
);

export default Menu;
