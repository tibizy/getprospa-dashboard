import React from "react";
import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Layout, Row, Col, Typography, Card, Form, Input, Button, Radio, Space } from "antd";
import './CreateAccount.less';

function PersonalInfoForm({ submitted, onFinish, ...props}) {
  return (
    <Card className="auth-container-card container-padding-y" bordered={false}>
        <Typography.Title level={3}>Create your account</Typography.Title>
        <Typography.Text>A short description about account types</Typography.Text>
        <Form
          className="auth-form"
          onFinish={(data) => this.onFinish(data)}
        >
          <Form.Item name="firstName" rules={[{ required: true, message: 'Please input your first name!' }]} >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item name="lastName" rules={[{ required: true, message: 'Please input your last name!' }]} >
            <Input placeholder="Last name" />
          </Form.Item>
          <Row gutter={16}>
            <Col flex={1}>
              <Form.Item name="country" rules={[{ required: true, message: 'Please select your country code!' }]} >
                <Input placeholder="+---" />
              </Form.Item>
            </Col>
            <Col flex={3}>
              <Form.Item name="lastName" rules={[{ required: true, message: 'Please input your mobile number!' }]} >
                <Input placeholder="Mobile number" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your email address!' }]} >
            <Input placeholder="Email address" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Next
            </Button>
          </Form.Item>
        </Form>
      </Card>
  )
}


function BusinessInfo({ onFinish, ...props}) {
  return (
    <Card className="auth-container-card container-padding-y" bordered={false}>
        <Typography.Title level={3}>Create your account</Typography.Title>
        <Typography.Text>A short description about account types</Typography.Text>
        <Form
          className="auth-form"
          onFinish={(data) => this.onFinish(data)}
        >
          <Form.Item name="businessType">
            <Space direction="vertical">
              <Card className="business-type-option">
                <Radio>
                <Typography.Title level={5}>I have a registered business / charity with CAC</Typography.Title>
              </Radio>
              </Card>
              <Card className="business-type-option">
              <Radio>
                <Typography.Title level={5}>My business is not yet registered, I would like to register</Typography.Title>
              </Radio>
              </Card>
              <Card className="business-type-option">
                <Radio>
                  <Typography.Title level={5}>I’m a freelancer I do business in my personal name</Typography.Title>
                </Radio>
              </Card>
            </Space>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Next
            </Button>
          </Form.Item>
        </Form>
      </Card>
  )
}

class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPersonalInfoSubmitted: false
    };
  }

  onFinishPersonalInfo() {
    
  }

  onFinish() {
    this.props.history.push("dashboard");
  }

  render() {
    return (
      <Layout>
        <Layout.Content className="auth-create-account container-padding auth-login">
          <div className="text-right"> Already a member <Link to="/"> Sign In</Link></div>
          <Row justify="space-around" align="middle">
            {
              this.props.isPersonalInfoSubmitted ?
              <PersonalInfoForm submitted={this.props.isPersonalInfoSubmitted} onFinish={this.onFinishPersonalInfo}/> :
              <BusinessInfo onFinish={this.onFinish}/>
            }
          </Row>

        </Layout.Content>
      </Layout>
    );
  }
}

export default withRouter(CreateAccount);
