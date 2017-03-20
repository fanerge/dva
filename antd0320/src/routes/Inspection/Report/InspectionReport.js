import React, {Component} from 'react';
import {connect} from 'dva';
import { DatePicker, Input, Icon, Upload, message, Button } from 'antd';
import moment from 'moment';
import request from '../../../utils/request';
// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
//require('es6-promise').polyfill();
//import 'whatwg-fetch';

import styles from './InspectionReport.css';

class InspectionReport extends Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    //检查必填项是否完成
    let state = this.state;
    let date = state.date;
    let joinname = state.joinname;
    let content = state.content;
    let companyName = state.companyName;
    let checkName = state.checkName;

    if( !date || !joinname || !content || !companyName || !checkName ){  //判断必填项是否完成
      return message.error('出错了，你还有必填项没有完成！');
    }
    //fetch异步提交数据 1.相应的必填项判断 2.this.state中所有数据  3.同时还有清空所有的表单
    //console.log('下面是要上传的数据：')
    //console.log(this.state);
  }

  //为日期state赋值
  handleDateChange = (date, value) => {
    this.setState({
      date: value,
    });
  }

  //所有的textarea 和 后两个innput 为sate赋值
  handleChange = (e) => {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value.trim(),
    });
  }

  save = () => {
    let state = this.state;
    let date = state.date;
    let joinname = state.joinname;
    let content = state.content;
    let questions = state.questions;
    let idears = state.idears;
    let dealWith = state.dealWith;
    let companyName = state.companyName;
    let checkName = state.checkName;
    let upload = state.upload;
    if(date || joinname || content || questions || idears || dealWith || companyName || checkName || upload){  //必须要填写数据才可以保存
      //上传数据
      return message.success('保存成功！');
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>监督检查记录台账上报：</legend>
          <table>
            <tbody>
              <tr className={ styles.row40, styles.row }>
                <td><i className={styles.require}>*</i>检查日期：</td>
                <td>
                  <DatePicker
                    value={moment('2017-03-19', 'YYYY-MM-DD')} 
                    onChange={this.handleDateChange}
                    />
                </td>
              </tr>
              <tr className={ styles.row }>
                <td><i className={ styles.require }>*</i>参加监督检查的部门及人员：</td>
                <td>
                  <textarea
                    className={ styles.joinname }
                    rows="1"
                    name="joinname"
                    value={this.state.joinname}
                    onChange={this.handleChange}
                    placeholder="如：交通运输部李四">
                  </textarea>
                </td>
              </tr>
              <tr className={ styles.row }>
                <td><i className={ styles.require }>*</i>监督检查主要内容：</td>
                <td>
                  <textarea
                    className={ styles.joinname }
                    value={ this.state.content }
                    rows="2"
                    name="content"
                    onChange={this.handleChange}
                    placeholder="">
                  </textarea>
                </td>
              </tr>
              <tr className={ styles.row } style={{ marginBottom: 0}}>
                <td>监督检查中查出的问题：</td>
                <td>
                  <textarea
                    className={ styles.joinname }
                    value={ this.state.questions }
                    rows="2"
                    name="questions"
                    onChange={this.handleChange}
                    placeholder="">
                  </textarea>
                </td>
              </tr>
              <tr className={ styles.row }>
                <td>检查组处理意见：</td>
                <td>
                  <textarea
                    className={ styles.joinname }
                    value={ this.state.idears }
                    rows="2"
                    name="idears"
                    onChange={this.handleChange}
                    placeholder="">
                  </textarea>
                </td>
              </tr>
              <tr className={ styles.row }>
                <td>整改结果：</td>
                <td>
                  <textarea
                    className={ styles.joinname }
                    value={ this.state.dealWith }
                    rows="2"
                    name="dealWith"
                    onChange={this.handleChange}
                    placeholder="">
                  </textarea>
                </td>
              </tr>
              <tr className={ styles.row40, styles.row }>
                <td><i className={styles.require}>*</i>受督查单位人签名：</td>
                <td><Input
                      style={{ width: 200 }}
                      placeholder=""
                      name="companyName"
                      value={ this.state.companyName }
                      onChange={this.handleChange}
                      prefix={<Icon type="user" />}
                      />
                </td>
              </tr>
              <tr className={ styles.row40, styles.row }>
                <td><i className={styles.require}>*</i>检查人员签名：</td>
                <td><Input
                      style={{ width: 200 }}
                      placeholder=""
                      name="checkName"
                      value={ this.state.checkName }
                      onChange={this.handleChange}
                      prefix={<Icon type="user" />}
                      />
                </td>
              </tr>
              <tr className={ styles.row40, styles.row }>
                <td>上传附件：</td>
                <td>
                  <Upload >
                      <Button>
                        <Icon type="upload" /> 点击上传
                      </Button>
                    </Upload>
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ display:'block',textAlign: 'center',marginBottom:10}}>
                  <Button type="dashed" 
                    style={{marginRight: 50, color: '#fff', background: '#666'}}
                    onClick={this.save}
                  >
                    保存
                  </Button>
                  <Button type="primary" onClick={this.handleSubmit}>
                    发布
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    );
  }
};

/*function mapStateToProps(state) {   //讲model中的数据映射为UI组件的属性
  return {
    inspectionReport: state.inspectionReport   //通过state[namespace]进行映射
  };
}*/

export default connect()(InspectionReport);
