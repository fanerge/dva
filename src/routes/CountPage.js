import React, {PureComponent} from 'react';
import { connect } from 'dva';
import styles from './CountPage.css'

class CountPage extends PureComponent {
    constructor(props){
        console.log(props)
        super(props);

        this.state = {
            inputVlue: 0
        }

        this.addRecord = this.addRecord.bind(this);
        this.minusRecord = this.minusRecord.bind(this);
        this.changeNum = this.changeNum.bind(this);
        this.beforeAddAfterMinus = this.beforeAddAfterMinus.bind(this);
    }

    addRecord() {
        this.props.dispatch({
            type: 'count/add',
            payload: {
                num: this.state.inputVlue
            }
        })
    }

    minusRecord(){
        this.props.dispatch({
            type: 'count/minus',
            payload: {
                num: this.state.inputVlue
            }
        })
    }

    beforeAddAfterMinus(){
        this.props.dispatch({
            type: 'count/add10Minus5',
            payload: {
                num: this.state.inputVlue
            }
        })
    }

    changeNum(event) {
        this.setState({inputVlue: event.target.value})
    }

    render(){
        const current = this.props.count.current
        return(<div>
            <div>Count: {current}</div> 
            <input type="number" value={this.state.inputVlue} onChange={this.changeNum}/>
            <br/> 
            <span>同步操作：</span> 
            <button type="button" onClick={this.addRecord}> + </button>
            <button type="button" onClick={this.minusRecord} className={styles.btn} > - </button>
            <br/> 
            <span>异步操作：</span> 
            <button type="button" onClick={this.beforeAddAfterMinus}> 先加10后减5 </button>    

        </div>);
    }
}

CountPage.propTypes = {
};

// 全局中的 state 对应的 key (这里count) 转换为 props 
function mapStateToProps({count}) {
  return { count };
}

// model 和 View 相连
export default connect(mapStateToProps)(CountPage);
