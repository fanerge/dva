import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Timeline, Icon,  Card, Col, Row, Affix } from 'antd';

import Config from '../../config';
import styles from './LoginPage.css';

function LoginPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.info}>
        <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row>
              <Col span="8">
                <Card title="姓名" bordered={false}>余真帆</Card>
              </Col>
              <Col span="8">
                <Card title="应聘职务" bordered={false}>前端工程师</Card>
              </Col>
              <Col span="8">
                <Card title="电话" bordered={false}>18010658268</Card>
              </Col>
            </Row>
          </div>
        </Affix>
      </div>
        <h1 className={styles.title} >个人介绍</h1>
        <div className={styles.content}>
          <Timeline>
          <Timeline.Item color="green">
              <h3>1991-10，出生于四川达州万源市</h3>
              <p>户口：农村</p>
            </Timeline.Item>
            <Timeline.Item color="green">
              <h3>2012-06，就读青岛工学院</h3>
              <p>专业：计算机系通信工程</p>
              <p>技能：c语言、计算机网络基础、数据结构和算法、常用的设计模式</p>
            </Timeline.Item>
            <Timeline.Item color="green">
              <h3>2014-04，开始自学前端周边知识</h3>
              <p>软件及编辑器：photoshop、dreawear、adobeFalse</p>
              <p>专业技能：html、css、js、jquery</p>
            </Timeline.Item>
            <Timeline.Item color="green">
              <h3>2015-03到2016-05，春季校招----青岛蓝巨人科技有限公司</h3>
              <p>专业技能：html5、css3、bootstrap、weui、公司内部的框架</p>
            </Timeline.Item>
            <Timeline.Item color="red">
              <h3>2016-07到2017-03，成都数字立方信息技术有限公司</h3>
              <p>专业技能：ES6、webpack、node、react、react-router、redux</p>
            </Timeline.Item>
            <Timeline.Item>
              <h3>2017-03到未来</h3>
              <p>继续探索前端工程化之路，希望找到一家以react技术栈的公司，继续我的前端之路</p>
            </Timeline.Item>
          </Timeline>
        </div>
      <ul className={styles.list}>
        <li><Link to="/main">点击进入系统</Link></li>
      </ul>
    </div>
  );
}

LoginPage.propTypes = {
};

export default connect()(LoginPage);
