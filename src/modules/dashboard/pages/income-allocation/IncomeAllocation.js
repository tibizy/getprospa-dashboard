import React from "react";
import { Layout, Typography, Button, Row, Space, Col, Card, Form, Input, InputNumber, message } from "antd";
import axios from 'axios';

import './IncomeAllocation.less';
const axiosInstance = axios.create({
  baseURL: 'https://stage.getprospa.com/api/v1',
  headers: {
    'Authorization': 'Token 130dc1e976a2a988c05fdc71d0bccd83cd4bec8376333c2ca7852eb337c23737'
  }
})

const AllocationForm = ({ onSubitForm, resetAllocation,  changeAllocation, initialValues, incomeAllocations, maxAllocation }) => {
  const [form] = Form.useForm();
  return(
    <Form
    form={form}
    className="auth-form"
    onFinish={(data) => onSubitForm(data)}
  >
    {
      incomeAllocations.map((data, i) => 
        (<Form.Item key={`form-control-${i}`} name={`form-control-${i}`} label={`${data.biz_wallet_type} account ${i + 1}`}>
          <InputNumber placeholder="0" min={0} max={100} value={data.incoming_allocation} onChange={($event) => changeAllocation($event, data)} disabled={data.biz_wallet_type == 'current'}/>
          <span type="text" value={data.incoming_allocation} hidden={true} />
        </Form.Item>)
      )
    }
    <Space size="large">
      <Form.Item>
        <Button type="default" onClick={() => resetAllocation()}>
          Reset
        </Button>
        &nbsp;
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Space>
  </Form>
  
  )
}

class IncomeAllocation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      incomeAllocations: [],
      maxAllocationAmount: null,
    };
  }

  componentDidMount() {
    this.getPageData();
  }

  getPageData = () => {
    const messageInstace = message.loading('Fetching page data..', 0);
    let maxAllocationAmount = 100;
    axiosInstance.get(`/account/holder_sub_wallets/23`).then(res => {
      const incomeAllocations = res?.data?.data
      incomeAllocations.map((account) => {
        if(account.biz_wallet_type == 'current' ){ 
          account.incoming_allocation = account.incoming_allocation == "0.0" ? 100 : parseFloat(account.incoming_allocation);
          maxAllocationAmount = account.incoming_allocation;
        }else account.incoming_allocation = parseFloat(account.incoming_allocation);
      });
      if(maxAllocationAmount == 0) maxAllocationAmount = 100;
      console.log(incomeAllocations)
      this.setState({incomeAllocations: res?.data?.data || [], maxAllocationAmount});
      setTimeout(messageInstace, 1.5);
    }, (err) => {
      message.error('Failed to get data');
    })
  }

  onSubitForm = () => {
    const messageInstace = message.loading('Action in progress..', 0);
    axiosInstance.post(`/account/stake_share_add/`, { 
      biz_account_id: 23, 
      wallet_allocation: this.state.incomeAllocations.map((account) => ({ walletID: account.biz_wallet_id, walletShare: account.incoming_allocation })) 
    })
    .then(res => {
      setTimeout(messageInstace, 0);
      this.getPageData();
    }, (err) => {
      setTimeout(messageInstace, 0);
      message.error('Failed to complete operation', 2)
    })
  }

  resetAllocation = () => {
    const messageInstace = message.loading('Action in progress..', 0);
    axiosInstance.post(`/account/readjust_wallet_share/`, { biz_account_id: 23 }).then(res => {
      setTimeout(messageInstace, 0);
      this.getPageData();
    }, (err) => {
      setTimeout(messageInstace, 0);
      message.error('Failed to complete operation', 2)
    })
  }

  changeAllocation = (value, account) => {
    const newValue = parseFloat(value);
    if(account.biz_wallet_type != 'current') {
      const incomeAllocations = this.state.incomeAllocations;
      let maxAllocationAmount = this.state.maxAllocationAmount; let totalOtherAllocation = 0; let defaultAccountIndex = -1;
      let currentTotal = incomeAllocations.reduce((total, _account) => 
      _account.biz_wallet_id != account.biz_wallet_id && _account.biz_wallet_type != "current" ? total + _account.incoming_allocation : total, 0);
      incomeAllocations.find((_account) => _account.biz_wallet_id == account.biz_wallet_id).incoming_allocation = (maxAllocationAmount - newValue >= 0 ? newValue : maxAllocationAmount - currentTotal);
      incomeAllocations.map((_account, i) => {
        if(_account.biz_wallet_type != 'current') {
          totalOtherAllocation += parseInt(_account.incoming_allocation);
        } else if(_account.biz_wallet_type == 'current') {
          defaultAccountIndex = i;
        }
      })
      maxAllocationAmount = 100 - totalOtherAllocation;
      incomeAllocations[defaultAccountIndex].incoming_allocation = maxAllocationAmount;
      this.setState({ incomeAllocations, maxAllocationAmount })
    }

  }

  render () {
    // const form = Form.create();
    return (
      <Layout className="income-allocation">
        <Layout.Content>
          <Space direction="vertical" size="large" style={{width: '100%'}}>
            <Row justify="space-between" align="middle" gutter={[24, 24]}>
              <Col>
                <Typography.Title level={3} className="page-title no-margin">Income Allocation</Typography.Title>
              </Col>
            </Row>

            <Card className="auth-container-card container-padding-y" bordered={false}>
              <Typography.Title level={3}>Income Allocation Form</Typography.Title>
              <AllocationForm 
              {...this.state} changeAllocation={this.changeAllocation} 
              resetAllocation={this.resetAllocation} onSubitForm={this.onSubitForm}
              maxAllocation={this.state.maxAllocationAmount}
              />
            </Card>
            
          </Space>
          
        </Layout.Content>
      </Layout>
    );
  }
}

// var WrappedForm = Form.create()(IncomeAllocation)
export default IncomeAllocation;
