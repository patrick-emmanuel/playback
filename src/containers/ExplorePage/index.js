import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import menuData from '../../helpers/menuData';
import SideBar from '../SideBar';
import LoadingBar from 'react-redux-loading-bar'

const MainPage = styled.div`
  padding-left: 270px;
  background: #0f0f0f;
`;

class ExplorePage extends Component {
  render() {
    return (
      <div>
        <LoadingBar/>
        <SideBar menus={menuData} />
        <MainPage>
          <Switch>
            {menuData.map((menu, index) => (
              <Route
                key={index}
                path={menu.path}
                exact={menu.exact}
                component={menu.component}
              />
            ))}
          </Switch>
        </MainPage>
      </div>
    );
  }
}

export default ExplorePage;