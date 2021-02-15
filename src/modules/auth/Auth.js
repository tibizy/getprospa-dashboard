import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Divider, Layout, Row, Col, Typography } from "antd";

import { Login, CreateAccount } from './pages';
import './Auth.less';
import logo from '../../logo.svg';
import onboardingImage1 from '../../assets/images/onboarding-savings-image.png';

function Auth() {
  return (
    <Layout className="auth-container">
      <Layout.Sider breakpoint="sm" collapsedWidth="0" width="360" trigger={null}>


        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Row gutter={16} className="divider-steps">
            <Col flex={1}><Divider className="active"></Divider></Col>
            <Col flex={1}><Divider></Divider></Col>
            <Col flex={1}><Divider></Divider></Col>
            <Col flex={1}><Divider></Divider></Col>
            <Col flex={1}><Divider></Divider></Col>
          </Row>

          <div>
            <Typography.Title level={3}>Create multiple sub-account</Typography.Title>
            <Typography.Text>Organise your business finances easily with multiple accounts. No limits!</Typography.Text>
          </div>
        </div>

        <div>
          <div><img src={onboardingImage1}  /></div>
        </div>

        <div>
          <Typography.Text>&copy; 2020 Prospa Inc</Typography.Text>
        </div>

      </Layout.Sider>
      <Layout>
        <Layout.Content>
          <Switch>
            <Route path="/create-account">
              <CreateAccount />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default Auth;
