import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Divider, Layout, Row, Col } from "antd";

import { Login, CreateAccount } from './pages';
import './Auth.less';
import logo from '../../logo.svg';

function Auth() {
  return (
    <Layout className="auth-container">
      <Layout.Sider breakpoint="sm" collapsedWidth="0" width="360" trigger={null}>
      <div><img src={logo} className="App-logo" alt="logo" /></div>

      <Row gutter={16} className="divider-steps">
        <Col flex={1}><Divider className="active"></Divider></Col>
        <Col flex={1}><Divider></Divider></Col>
        <Col flex={1}><Divider></Divider></Col>
        <Col flex={1}><Divider></Divider></Col>
        <Col flex={1}><Divider></Divider></Col>
      </Row>

      </Layout.Sider>
      <Layout>
        <Layout.Content>
          <Router>
            <Switch>
              <Route path="/create-account">
                <CreateAccount />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Router>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default Auth;
