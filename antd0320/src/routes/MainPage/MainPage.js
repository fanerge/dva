import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import config from '../../config'; //加载配置文件
import orm from '../../utils/orm';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import CommonFooter from '../../components/CommonFooter/CommonFooter';
import styles from './MainPage.css';

class MainPage extends React.Component {
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
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
            { config.nav.map(function (nav) {
                return (
                    <SubMenu key={nav.navKey}
                             title={<span><Icon type={nav.icon}/> { nav.text } </span>}>
                        { nav.children.map(function (subnav) {
                            return (
                                <Menu.Item key={subnav.subNavKey}><Link
                                    to={subnav.path}> { subnav.text } </Link> </Menu.Item>
                            );
                        }) }
                    </SubMenu>
                );
            }) }
          </Menu>
        </Sider>
        <Layout>
          <CommonHeader />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            {config.sponsor}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(MainPage);
