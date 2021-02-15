import React from "react";
import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Layout, Row, Typography, Card, Form, Input, Button } from "antd";
import './Login.less';

class Login extends React.Component {

  onFinish = (data) =>  {
    console.log(this.props.match)
    this.props.history.push("dashboard");
  }

  render() {
    return (
      <Layout>
        <Layout.Content className="container-padding auth-login">
          <div className="text-right">
            <Typography.Title level={5}> Don't have an account <Link to="/create-account"> Sign Up</Link> </Typography.Title>
          </div>
          <Row justify="space-around" align="middle">
            <Card className="auth-container-card container-padding-y" bordered={false}>
              <Typography.Title level={3}>Welcome back to Prospa</Typography.Title>
              <Typography.Text type="secondary">An account, with powerful, personalised tools all in one place</Typography.Text>
              <Form
                className="auth-form"
                onFinish={(data) => this.onFinish(data)}
              >
                <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]} >
                  <Input placeholder="Email address" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                  <Input type="password" placeholder="Enter password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Next
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Row>

        </Layout.Content>
      </Layout>
    );
  }
}

export default withRouter(Login);
