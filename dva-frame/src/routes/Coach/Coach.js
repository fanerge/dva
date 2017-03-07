import React,{ Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import styles from './Coach.css';

class Coach extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>这里是客车运输页面</h1>
        <div>{ this.props.children }</div>
      </div>
    );
  }
}

export default connect()(Coach);
