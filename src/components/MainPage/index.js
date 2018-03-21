import styled from 'styled-components';
import menuData from '../../helpers/menuData';
import SideBar from '../SideBar';
import { Route } from 'react-router-dom';
import React from 'react';

const Page = styled.div`
  margin-left: 270px;
`;

const MainPage = () => (
  <div>
    <SideBar />
    <Page>
      {menuData.map((menu, index) => (
        <Route
          key={index}
          path={menu.path}
          exact={menu.exact}
          component={menu.component}
        />
      ))}
    </Page>
  </div>
);

export default MainPage;
