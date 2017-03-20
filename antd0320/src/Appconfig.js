//原有的配置全局变量
const AppConfig = {
    DEBUG: true, //debug为true时显示输出日志
    RemoteApiUrl: '', //服务器地址
    ormClientServer: '',
    systemCode: "ormJCCS",
    userId: "4028da8658a9aeaa0158af631eab0019",
    //mapUrl: "http://10.100.32.77/gisapi/rest/api/js/5.0/BF833A1145CB44669FB387DEA62AC464",//地图地址
    //mapUrl: "http://172.16.1.110/gisapi/rest/api/js/5.0/BF833A1145CB44669FB387DEA62AC464",//地图地址
    mapUrl: "http://beyondmap.cn:83/gisapi/rest/api/js/5.0/BF833A1145CB44669FB387DEA62AC464",//地图地址
    lbsUrl: "",//如果lbs服务是本地独立的，那需要单独配置，否则用地图平台js里默认指定的lbs服务地址
    mapCenter: {x: 120.15389696607963, y: 30.255446633965953},//地图中心点 杭州 120.15389696607963,30.255446633965953
    mapZoom: 7, //地图缩放
    scode: null,//市
    xcode: null,//县
    pcode: null,//省
    insCode: {
        bus: '011,012,030,031,032',//两客一危
        taxi: '090'//出租车
    },
    areaName: "330000",
    freshTime: 15,
    warnFreshTime:5000, //报警列表刷新页面
    menuData: 'menuData-sj', //配置默认加载的菜单
    internalFrequency:300*1000//车辆在线状态列表更新频率
};

var url = document.URL;
var temp1 = url.indexOf("/", 9);
var temp2 = url.indexOf("/", temp1 + 1);
var gisRootPath = url.substr(0, temp2 + 1);

AppConfig.NRemoteApiUrl = gisRootPath;
AppConfig.RemoteApiUrl = gisRootPath;

export default AppConfig;