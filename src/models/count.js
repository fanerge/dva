function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}


export default {
  namespace: 'count',
  state: {
    record: 0,
    current: 0
  },

  reducers: {
    add(state, action) {
      return {
        ...state, 
        current: state.current + Number(action.payload.num)
      }
    },
    minus(state, action) { 
      return {
        ...state, 
        current: state.current - Number(action.payload.num)
      }
    },
  },

  effects: {
    *add10Minus5(action, {call, delay, put}){
       yield put({
        type: 'add',
        payload: {num: 10}
       });
       console.log(11)
       // 同步模拟
       yield sleep(1000);
       console.log(22)
       yield put({
        type: 'minus',
        payload: {num: 5}
       });
    }
  }
}












/*function delay() {
  new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
}

function key() {

}

export default {

  namespace: 'count',

  state: {
    record: 0,
    current: 0,
  },

  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return { 
        ...state, 
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent 
      };
    },
    mins(state) {
       const newCurrent = state.current - 1
       return { 
        ...state, 
        current: newCurrent 
      };
    }
  },

  effects: {
    *add(action, {call, put}) {
      yield call(delay, 1000);
      yield put({type: 'add'})
    }
  },

  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
    },
  },

};*/
