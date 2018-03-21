import HomePage from '../containers/HomePage';
import React from 'react';

export default [
  {
    path: '/home',
    name: 'Home',
    iconClassName: 'fa fa-home',
    iconName: 'home',
    exact: true,
    component: () => <HomePage/>
  },
  /*{
    path: '/browse',
    name: 'Browse',
    iconClassName: 'fa fa-binoculars',
    iconName: 'binoculars'
  },
  {
    path: '/settings',
    name: 'Setting',
    iconClassName: 'fa fa-wrench',
    iconName: 'wrench'
  }*/
];