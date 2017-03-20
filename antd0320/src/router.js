import React from 'react';
import {Router, Route, IndexRoute, Redirect, useRouterHistory} from 'dva/router';
import {createHashHistory} from 'history';
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

import LoginPage from './routes/LoginPage/LoginPage';                         //登录页面
import MainPage from './routes/MainPage/MainPage';                            //控制面板主页面
import InspectionReport from './routes/Inspection/Report/InspectionReport';   //督查----上报
import InspectionQuery from './routes/Inspection/Query/InspectionQuery';   //督查----上报
import InspectionCheck from './routes/Inspection/Check/InspectionCheck';   //督查----上报

function RouterConfig() {
    return (
        <Router history={appHistory}>
            <Route path="/" component={ LoginPage }/>
            <Route path="main" component={ MainPage }>
                <IndexRoute component={ InspectionReport }/>
                <Route path="inspectionquery" component={ InspectionQuery } />
                <Route path="inspectionreport" component={ InspectionReport } />
                <Route path="inspectioncheck" component={ InspectionCheck } />
            </Route>
        </Router>
    );
}

export default RouterConfig;
