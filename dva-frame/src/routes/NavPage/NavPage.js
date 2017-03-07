import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon, Badge } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import Config from '../../config'; //加载配置文件
import styles from './NavPage.css';

class CarPage extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <div style={{ color: '#fff', fontSize: '20' }}>
            { Config.systemName }
            <strong style={{ color: '#ccc', paddingLeft: 30,  }}>当前城市为：{ Config.currentCity }</strong>
            <div style={{ width: 380, height: 'auto',float: 'right', fontSize: 10, }}>
              超级管理员登录，你当前有
              <span> 未读信息：<Badge count={25} /></span>
              <span> 待处理问题：<Badge count={109} style={{ backgroundColor: '#87d068' }} /> </span>
            </div>
          </div>
        </Header>
        <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          { Config.nav.map(function( nav ){
            return (
              <SubMenu key={nav.navKey} title={<span><Icon type="user" /> { nav.text } </span>}>
                { nav.children.map(function(subnav){
                    return (
                      <Menu.Item key={subnav.subNavKey}><Link to={subnav.path}> { subnav.text } </Link> </Menu.Item>
                    );
                }) }
              </SubMenu>
            ); 
          }) }
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px', height: 700 }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
          <Breadcrumb.Item>导航</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          { this.props.children }
        </Content>
      </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(CarPage);
