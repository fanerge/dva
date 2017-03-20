import dva from 'dva';
import 'normalize.css';

import './index.css';
import router from './router';

// 1. Initialize，初始化
const app = dva({
    initialState:{

    },
    onError(e) {   //全局抛出错误，对于antd
        message.error(e.message, /* duration */3);
    },
});

// 2. Plugins，安装插件
// app.use({});

// 3. Model数据层
//app.model(require('./models/products'));
//app.model(require('./models/inspectionReportModel'));  //督查----上报页面数据

// 4. Router路由配置
app.router(router);

// 5. Start启动应用
app.start('#root');
