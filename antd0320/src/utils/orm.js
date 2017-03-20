import $ from 'jquery';

import AppConfig from '../Appconfig'; //导入原有配置模块
window.AppConfig = AppConfig;

let ORM = window.ORM || {};
//获取资源
ORM.getRes = function(callback, options, errorBack) {
    var defaults = {
        userId: window.AppConfig.userId,
        systemCode: window.AppConfig.systemCode
    }
    var defs = $.extend(defaults, options);
    $.ajax({
        type: "get",
        async: false,
        data: defs,
        url: window.AppConfig.ormClientServer + "rest/menuResource/getRes",
        dataType: "jsonp",
        success: function(data){
            callback && callback(ORM.toMenuData(data.data));
        },
        error: function(error){
            errorBack && errorBack(error);
        }
    });
};

//F:\workSpace\beyond-app\data-analysis\src\main\webapp
ORM.getUserInfo = function(callback, errorBack) {
    $.ajax({
        type: "post",
        async: false,
        url: window.AppConfig.ormClientServer + "rest/sso/client/userInfo",
        success: function(data){
            callback && callback(data);
        },
        error: function(error){
            errorBack && errorBack(error);
        }
    });

};

ORM.toMenuData = function(data) {
    var tempData = [];
    for (var key in data) {
        var tmpObj = data[key];
        //if (tmpObj.code && userAuth[tmpObj.code]) {
        tmpObj.text = data[key].NAME;
        tmpObj.code = data[key].CODE;
        tmpObj.level = data[key].PARENTID == 'ROOT' ? 1 : 2;
        tmpObj.page = data[key].URL;
        tmpObj.iframe = true;
        tmpObj.isDefault = false;
        tmpObj.icon = 'icon-diqiu';
        tmpObj.baseIcon = data[key].BASE64ICON;
        tempData.push(tmpObj);
        //}
    }
    return ORM.getTree(tempData, "ROOT", "ID", "PARENTID");
};

ORM.logout = function(service) {
    window.location = window.AppConfig.NRemoteApiUrl+"/rest/sso/client/logout?service="+service;
};

ORM.getTree = function(data,pid,idname,pidname) {
    var tree = [],
        temp,
        temp2,
        mark,
        pids=[],
        tempChildren;
    if(!idname) idname = "ID";
    if(!pidname) pidname = "PID";

    if(!pid){
        //先标记出根节点
        for(var i=0;i<data.length;i++){
            temp = data[i];
            mark = false;//是否有父节点
            for(var j=0;j<data.length;j++){
                temp2 = data[j];
                if(temp[idname]!=temp2[idname] && temp[pidname]==temp2[idname]){
                    mark = true ;
                    break;
                }
            }
            if(mark==false){//多个根节点
                var hasId = false ;
                for(var o=0;o<pids.length;o++){
                    if(pids[o]==temp[pidname]){
                        hasId = true;
                        break;
                    }
                }
                if(!hasId){
                    pids.push(temp[pidname]);
                }
            }
        }
    }

    if(pid){
        for(var i=0;i<data.length;i++){
            temp = data[i];
            if(temp[pidname]==pid){
                tempChildren = wyHelper.getTree(data,temp[idname],idname,pidname);
                if(tempChildren && tempChildren.length>0){
                    temp.children = tempChildren ;
                }
                tree.push(temp);
            }
        }
    }

    //针对多个父节点
    if(pids!=null && pids.length>0){
        for(var j=0;j<pids.length;j++){
            for(var i=0;i<data.length;i++){
                temp = data[i];
                if(temp[pidname]==pids[j]){
                    tempChildren = wyHelper.getTree(data,temp[idname],idname,pidname);
                    if(tempChildren && tempChildren.length>0){
                        temp.children = tempChildren ;
                    }
                    tree.push(temp);
                }
            }
        }
    }
    return tree;
};

export default ORM;
