import dva from 'dva';
import './index.css';

// 1. Initialize，初始化
const app = dva({
    initialState:{
        products: [
            { name: 'dva', id: 1 },
            { name: 'antd', id: 2 }
        ],
    },
});

// 2. Plugins，安装插件
// app.use({});

// 3. Model数据层
app.model(require('./models/products'));

// 4. Router路由配置
app.router(require('./router'));

// 5. Start启动应用
app.start('#root');
