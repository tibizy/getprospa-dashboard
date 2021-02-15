import React, { useState } from "react";
import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Layout, Row, Col, Typography, Card, Form, Input, Button, Radio, Space, Select } from "antd";
import { CheckCircleTwoTone } from '@ant-design/icons';
import './CreateAccount.less';

function PersonalInfoForm({ submitted, onFinish, ...props}) {
  const [form] = Form.useForm();
  return (
    <Card className="auth-container-card container-padding-y" bordered={false}>
        <Typography.Title level={3}>Create your account</Typography.Title>
        <Typography.Text>A short description about account types</Typography.Text>
        <Form
          form={form}
          className="auth-form"
          onFinish={(data) => onFinish(data)}
        >
          <Form.Item name="firstName" rules={[{ required: true, message: 'Please input your first name!' }]} >
            <Input placeholder="First name"/>
          </Form.Item>
          <Form.Item name="lastName" rules={[{ required: true, message: 'Please input your last name!' }]} >
            <Input placeholder="Last name"/>
          </Form.Item>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="country" rules={[{ required: true, message: 'Please select your country code!' }]} >
                <Select placeholder="Country" className="form-control">
                  <Select.Option value="+234">+234</Select.Option>
                  <Select.Option value="+233">+233</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item name="phoneNumber" rules={[{ required: true, message: 'Please input your mobile number!' }]} >
                <Input placeholder="Mobiles number"/>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your email address!' }]} >
            <Input placeholder="Email address"/>
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
  const businessTypesBenefit = [
    {
      type: 'registered-business', description: 'I have a registered business / charity with CAC', 
      sub_description: 'As a registered business you\'ll get:',
      benefits: [
        'Account with your business name',
        'Send to and receive transfers from all Nigerian banks',
        'Tools for Business Management'
      ]
    },
    {
      type: 'non-registered-business', description: 'My business is not yet registered, I would like to register', 
      sub_description: 'Everything you need to start your business',
      benefits: [
        'Registerd business name with CAC',
        'Tax identification number',
        'Your will be automatically opened on completion',
      ]
    },
    {
      type: 'freelancer', description: 'I’m a freelancer I do business in my personal name', 
      benefits: [
      ]
    }
  ]
  const [businessType, setBusinessType] = useState('registered-business');
   
  return (
    <Card className="auth-container-card container-padding-y" bordered={false}>
        <Typography.Title level={3}>Open a new business account</Typography.Title>
        <Typography.Text>A short description about account types</Typography.Text>
        <Form
          className="auth-form"
          onFinish={(data) => onFinish(data)}
        >
          <Form.Item name="businessType">
              <Radio.Group defaultValue="registered-business">
                <Space direction="vertical" style={{width: '100%'}}>
                  {
                    businessTypesBenefit.map((business, i) => 
                      <Card className="business-type-option" key={`businessType${i}`}>
                        <Radio value={business.type} onChange={() => setBusinessType(business.type)}>
                          <Space direction="vertical">
                          <Typography.Title level={5}>{business.description}</Typography.Title>
                          {
                            business.benefits &&  businessType == business.type ?
                            <Space direction="vertical">
                              <Typography.Text>{business.sub_description}</Typography.Text>
                              {
                                business.benefits.map((benefit, i) => 
                                <Space key={`benefits${i}`} align="baseline"> 
                                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                                  <Typography.Text key={`benefits${i}`}> {benefit}</Typography.Text>
                                </Space>)
                              }
                            </Space> : null
                            }
                          </Space>
                        </Radio>
                      </Card>
                      )
                  }
                </Space>
              </Radio.Group>
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
      isPersonalInfoSubmitted: true
    };
  }

  onFinishPersonalInfo = () => {
    this.setState({isPersonalInfoSubmitted: true})
  }

  onFinish = () => {
    console.log(this.props)
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <Layout>
        <Layout.Content className="auth-create-account container-padding auth-login">
          <div className="text-right">
            <Typography.Title level={5}> Already a member <Link to="/"> Sign In</Link> </Typography.Title>
          </div>
          <Row justify="space-around" align="middle">
            {
              !this.state.isPersonalInfoSubmitted ?
              <PersonalInfoForm submitted={this.state.isPersonalInfoSubmitted} onFinish={this.onFinishPersonalInfo}/> :
              <BusinessInfo onFinish={this.onFinish}/>
            }
          </Row>

        </Layout.Content>
      </Layout>
    );
  }
}

export default withRouter(CreateAccount);
