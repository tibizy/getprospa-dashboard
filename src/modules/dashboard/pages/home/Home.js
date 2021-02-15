import React from "react";
import { Layout, List, Avatar, Typography, Button, Row, Space, Col, Card, Statistic, Image, Progress } from "antd";
import Icon, { CreditCardOutlined, BankOutlined, NotificationOutlined } from '@ant-design/icons';
import './Home.less';
import { ReactComponent as TransactionTransferIcon } from '../../../../assets/icons/prospa-transaction-transfer-icon.svg';
import { ReactComponent as TransactionChargesIcon } from '../../../../assets/icons/prospa-transaction-charges-icon.svg';
import DashboardChat from '../../../../assets/images/prospa-dashboard-chat.png';

function DashboardHome() {
  
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

  const CashExpenseBar = ({ amount }) => (<Progress percent={amount} showInfo={false} strokeColor="#FFCF56"/>)
  return (
    <Layout className="dashboard-home">
      <Layout.Content>
        <Space direction="vertical" size="large" style={{width: '100%'}}>
          <Row justify="space-between" align="middle" gutter={[24, 24]}>
            <Col>
              <Typography.Title level={3} className="page-title no-margin">Welcome back, Katty</Typography.Title>
              <Typography.Text level={3} className="page-sub-title">Here's what has been happening in the last <a>7 days</a></Typography.Text>
            </Col>
            <Col>
              <Button size="large" type="primary">Add a sub account</Button>
            </Col>
          </Row>

          <Row justify="space-between" gutter={[24, 24]}>
            <Col flex="1">
              <Card className="card-section">
                <Space direction="vertical" size={36} style={{width: "100%"}}>
                  <Row justify="space-between">
                    <Space direction="vertical" size={5}>
                      <Typography.Title level={5} className="section-title">CURRENT ACCOUNT</Typography.Title>
                      <Typography.Text level={1} className="section-sub-title">PROVIDUS BANK- 9906533917</Typography.Text>
                    </Space>
                    <Avatar size="large"  style={{ backgroundColor: 'rgba(126, 81, 255, 0.1)', color: '#7E51FF', fontSize: '20px' }} icon={<CreditCardOutlined />} />
                  </Row>
                  <Typography.Title className="amount-title" level={1}>N814,800<sub>.45</sub></Typography.Title>
                </Space>
              </Card>
            </Col>
            <Col flex="1">
              <Card className="card-section">
                <Space direction="vertical" size={36} style={{width: "100%"}}>
                  <Row justify="space-between">
                    <Space direction="vertical" size={5}>
                      <Typography.Title level={5} className="section-title">SAVINGS ACCOUNT</Typography.Title>
                      <Typography.Text level={5} className="section-sub-title">SUB ACCOUT - 12346789</Typography.Text>
                    </Space>
                    <Avatar size="large" style={{ backgroundColor: 'rgba(0, 210, 255, 0.1)', color: '#00D2FF', fontSize: '20px' }} icon={<CreditCardOutlined />} />
                  </Row>
                  <Typography.Title className="amount-title" level={1}>N39,342<sub>.45</sub></Typography.Title>
                </Space>
              </Card>
            </Col>
          </Row>

          <Row justify="space-between" gutter={[24, 24]}>
            <Col xs={24} md={14}>
              <Card className="card-section">
                <Space direction="vertical" size={25} style={{width: "100%"}}>
                  <Typography.Title level={5} className="section-title">June Summary</Typography.Title>

                  <Row gutter={36}>
                    <Col><Statistic span={12} title="Money In" value={'N 5,650,000'} /></Col>
                    <Col><Statistic title="Money Out" value={'N 5,650,000'} /></Col>
                    <Col><Statistic title="Difference" value={'N 5,650,000'} /></Col>
                  </Row>

                  <Image width={'100%'} preview={false} src={DashboardChat} />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={10}>
              <Card className="card-section">
                <Space direction="vertical" size={56} style={{width: "100%"}}>
                  <Typography.Title level={5} className="section-title">Cash outflow</Typography.Title>
                  <Space direction="vertical" size={56} style={{width: "100%"}}>
                    <Row justify="space-between">
                      <Space>
                        <Avatar shape="square" style={{ backgroundColor: '#E900AE' }} icon={<BankOutlined />} />
                        <Typography.Text className="section-sub-title">Bank Fees</Typography.Text>
                      </Space>
                      <Col span={12}>
                        <CashExpenseBar amount={85}/>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Space>
                        <Avatar shape="square" style={{ backgroundColor: '#17ECD4' }} icon={<CreditCardOutlined />} />
                        <Typography.Text className="section-sub-title">Internet</Typography.Text>
                      </Space>
                      <Col span={12}>
                        <CashExpenseBar amount={60}/>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Space>
                        <Avatar shape="square" style={{ backgroundColor: '#C155FF' }} icon={<NotificationOutlined />} />
                        <Typography.Text className="section-sub-title">Marketing</Typography.Text>
                      </Space>
                      <Col span={12}>
                        <CashExpenseBar amount={30}/>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Space>
                        <Avatar shape="square" style={{ backgroundColor: '#00EC47'}} icon={<Icon component={TransactionTransferIcon}/>} />
                        <Typography.Text className="section-sub-title">Transfer</Typography.Text>
                      </Space>
                      <Col span={12}>
                        <CashExpenseBar amount={15}/>
                      </Col>
                    </Row>
                  </Space>
                </Space>
              </Card>
            </Col>
          </Row>

          <Card>
            <Space direction="vertical" size={25} style={{width: "100%"}}>
              <Row justify="space-between">
                <Typography.Title level={5} className="section-title">Recent transactions</Typography.Title>
                <Button danger size="small">See all</Button>
              </Row>
              <List
                itemLayout="horizontal"
                dataSource={recent_transactions}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={ <Avatar size="large" style={{ backgroundColor: '#F4F8FB', fontSize: '20px' }} >{item.transaction_type == 'Charges' ? <TransactionChargesIcon /> : <TransactionTransferIcon />} </Avatar>}
                      title={<Typography.Text level={4} style={{fontWeight: '600'}} className="no-margin">{item.title}</Typography.Text>}
                      description={item.timestamp}
                    />

                    <Typography.Text>{item.amount}</Typography.Text>
                  </List.Item>
                )}
              />
            </Space>
          </Card>
        </Space>
        
      </Layout.Content>
    </Layout>
  );
}

export default DashboardHome;
