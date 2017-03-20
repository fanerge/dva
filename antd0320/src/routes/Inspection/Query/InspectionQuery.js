import React, {Component} from 'react';
import {connect} from 'dva';
import { DatePicker, Input, Icon, message, Button, Row, Col, Select, Table } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const Option = Select.Option;

// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
//require('es6-promise').polyfill();
//import 'whatwg-fetch';

import styles from './InspectionQuery.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class App extends Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" style={{marginLeft:10}} onClick={this.start}
            disabled={!hasSelected} loading={loading}
          >Reload</Button>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

class InspectionQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',  //检查日期
      joinname: '',  //参加监督检查的部门及人员
      content: '',  //监督检查主要内容
      questions: '',  //监督检查中查出的问题
      idears: '',   //检查组处理意见
      dealWith: '',  //整改结果
      companyName: '',  //受督查单位人签名
      checkName: '',    //检查人员签名
      upload: '',   //上传附件
    };
  }
  
  render(){
    return (
        <form>
          <fieldset>
            <legend>监督检查记录上报查询：</legend>
            <from>
              <div className={ styles['gutter-example'] }>
                <Row gutter={16}>
                  <Col className={styles['gutter-row']} span={2}>
                    <div className={ styles['gutter-title'] }>
                      检查人员：
                    </div>
                  </Col>
                  <Col className={styles['gutter-row']} span={4}>
                    <div className={ styles['gutter-box'] }>
                      <Input defaultValue="mysite" />
                    </div>
                  </Col>
                  <Col className={styles['gutter-row']} span={2}>
                    <div className={ styles['gutter-title'] }>
                      检查日期：
                    </div>
                  </Col>
                  <Col className={styles['gutter-row']} span={6}>
                    <div className={ styles['gutter-box'] }>
                      <RangePicker
                        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                        format={dateFormat}
                        style={{ width: 240 }}
                      />
                    </div>
                  </Col>
                  <Col className={styles['gutter-row']} span={2}>
                    <div className={ styles['gutter-title'] }>
                      发布状态：
                    </div>
                  </Col>
                  <Col className={styles['gutter-row']} span={4}>
                    <div className={ styles['gutter-box'] }>
                      <Select defaultValue="所有" style={{ width: 120 }}>
                        <Option value="jack">已发布</Option>
                        <Option value="lucy">未发布</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col className={styles['gutter-row']} span={4}>
                    <div className={ styles['gutter-box'] }>
                      <Button>查询</Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <App />
            </from>
          </fieldset>
        </form>
    );
  }
};

export default connect()(InspectionQuery);
