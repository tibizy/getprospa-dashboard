import React from "react";
import { Layout, List, Menu, Avatar, Typography, Dropdown, Button, Divider, Row, Space, Col, Card, Statistic, Image } from "antd";
import Icon, { DownOutlined, BellFilled, CreditCardOutlined } from '@ant-design/icons';
import './Dashboard.less';
import logo from '../../logo-dark.svg';
import { ReactComponent as ProspaMenuItemAccount } from '../../assets/icons/prospa-menu-item-account.svg';
import { ReactComponent as ProspaMenuItemInvoice } from '../../assets/icons/prospa-menu-item-invoice.svg';
import { ReactComponent as ProspaMenuItemTransfer } from '../../assets/icons/prospa-menu-item-transfer.svg';
import { ReactComponent as ProspaMenuItemOther } from '../../assets/icons/prospa-menu-item-other.svg';
import { ReactComponent as TransactionTransferIcon } from '../../assets/icons/prospa-transaction-transfer-icon.svg';
import { ReactComponent as TransactionChargesIcon } from '../../assets/icons/prospa-transaction-charges-icon.svg';
import DashboardChat from '../../assets/images/prospa-dashboard-chat.png';

import { Home } from './pages';

function Dashboard() {
  const company_menu = (
    <Menu>
      <Menu.Item className="active">
        <a target="_blank" rel="noopener noreferrer">
          Clayvant Inc
        </a>
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          Business name 2
        </a>
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          Busiess name 3
        </a>
      </Menu.Item>
      <a target="_blank" className="menu-item-bottom-action" rel="noopener noreferrer">
        Add a business
      </a>
    </Menu>
  );

  const recent_transactions = [
    {
      title: 'Transfer Fee', desctiption: '', transaction_type: 'Charges', amount: '-N145.90', timestamp: '12:49AM'
    },
    {
      title: 'Adam Chapman', desctiption: '', transaction_type: 'Transfer', amount: '-N2000.00', timestamp: '12:49AM'
    },
    {
      title: 'Shirley Barnes', desctiption: '', transaction_type: 'Transfer', amount: '-N2000.00', timestamp: '12:49AM'
    },
    {
      title: 'Shirley Barnes', desctiption: '', transaction_type: 'Transfer', amount: '-N2000.00', timestamp: '12:49AM'
    },
  ];
  return (
    <Layout className="dashboard">
       <Layout.Sider breakpoint="sm" collapsedWidth="0" width="360" trigger={null}>
          <div className="aside-header" id="aside-header">
            <Dropdown overlay={company_menu} getPopupContainer={() => document.getElementById('aside-header')} trigger={['click']} placement="bottomCenter">
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size="large">BN</Avatar>}
                  title={<a href="https://ant.design"><Typography.Title level={5}>Clayvant Inc</Typography.Title></a>}
                  description="Manage account"
                />
                <Button icon={<DownOutlined />}></Button>
              </List.Item>
            </Dropdown>
          </div>
          <div className="aside-container">

            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.Item key="1" icon={<Icon component={ProspaMenuItemAccount} />}>
                Accounts
              </Menu.Item>
              <Menu.Item key="2" icon={<Icon component={ProspaMenuItemTransfer} />}>
                Transfer
              </Menu.Item>
              <Menu.Item key="3" icon={<Icon component={ProspaMenuItemInvoice} />}>
                Invoice
              </Menu.Item>
              <Menu.Item key="4" icon={<Icon component={ProspaMenuItemOther} />}>
                Management
              </Menu.Item>
              <Menu.Item key="5" icon={<Icon component={ProspaMenuItemOther} />}>
                Security
              </Menu.Item>
              <Menu.Item key="6" icon={<Icon component={ProspaMenuItemOther} />}>
                Support
              </Menu.Item>
            </Menu>


            <div><img src={logo} className="App-logo" alt="logo" /></div>
          </div>


      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <Row justify="space-between" align="middle">
            <Typography.Title level={3} className="page-title">Dashboard</Typography.Title>

            <Space>
              <Button size="large" className="notification-btn" icon={<BellFilled />}></Button>
              <Avatar size="large" src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3e378252a934e660f231666b51bd269a" />
            </Space>
          </Row>
          
        </Layout.Header>
        <Layout.Content className="dashboard-page-content">
          <Home />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
