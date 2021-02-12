import React from "react";
import { Layout } from "antd";
import './Dashboard.less';
import logo from '../../logo-dark.svg';

function Dashboard() {
  return (
    <Layout className="dashboard">
       <Layout.Sider breakpoint="sm" collapsedWidth="0" width="360" trigger={null}>
        <div><img src={logo} className="App-logo" alt="logo" /></div>


      </Layout.Sider>
      <Layout>
        <Layout.Header>
          
        </Layout.Header>
        <Layout.Content>
          
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
