import { Component } from 'react';
import { Progress } from 'antd';

class ProgressShow extends Component {
  render(){
    return (
        <section>
          <div>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </div>
          <div>
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
          </div>
        </section>
    );
  }
}

export default ProgressShow;
