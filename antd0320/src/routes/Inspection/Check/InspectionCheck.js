import React, {Component} from 'react';
import {connect} from 'dva';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from 'antd';

import styles from './InspectionCheck.css';

class InspectionCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render(){
    return (
      <div>
        <div>
          <h4>你要发表文章吗？</h4>
          <Editor />
        </div>
      </div>
    );
  }
};

export default connect()(InspectionCheck);
