//以下为系统配置项
const config = {
    systemName: '温州交通管理上报系统--企业端',
    currentCity: '温州',
    serverQQ: 1232344, //技术群
    sponsor: '浙江省温州交通局管理局监制', //主办方
    nav: [{
            navKey: 'nav1',   //react为提升性能所添加
            text: '安全会议管理',
            icon: 'global',
            children: [
                {
                    subNavKey: '1',
                    text: '安全会议记录上报查询',
                    path: 'main/inspectionquery'
                },
                {
                    subNavKey: '2',
                    text: '安全会议记录台账上报',
                    path: 'main/inspectionreport'
                },
                {
                    subNavKey: '3',
                    text: '安全会议记录上报查看',
                    path: 'main/inspectioncheck'
                }

            ]
        },
        {
            navkey: 'nav2',
            text: '督查记录管理',
            icon: 'car',
            children: [
                {
                    subNavKey: '4',
                    text: '监督检查记录台账上报',
                    path: 'main/inspectionquery'
                },
                {
                    subNavKey: '5',
                    text: '监督检查记录上报查询',
                    path: 'main/inspectionreport'
                },
                {
                    subNavKey: '6',
                    text: '监督检查记录上报查看',
                    path: 'main/inspectioncheck'
                }
            ]
        },
        {
            navkey: 'nav3',
            text: '安全事故管理',
            icon: 'bank',
            children: [
                {
                    subNavKey: '7',
                    text: '安全事故情况记录上报查询',
                    path: 'main/inspectionquery'
                },
                {
                    subNavKey: '8',
                    text: '安全事故情况记录台账上报',
                    path: 'main/inspectionreport'
                },
                {
                    subNavKey: '9',
                    text: '安全事故情况巨鹿上报查看',
                    path: 'main/inspectioncheck'
                }
            ]
        },
        {
          navkey: 'nav4',
          text: '安全培训管理',
          icon: 'bank',
          children: [
            {
              subNavKey: '10',
              text: '安全宣传教育记录台账上报',
              path: 'main/inspectionquery'
            },
            {
              subNavKey: '11',
              text: '安全宣传记录台账上报查看',
              path: 'main/inspectionreport'
            },
            {
              subNavKey: '12',
              text: '安全宣传培训活动记录查询',
              path: 'main/inspectioncheck'
            }
          ]
        } ,
        {
          navkey: 'nav5',
          text: '安全管理文件汇编',
          icon: 'bank',
          children: [
            {
              subNavKey: '13',
              text: '安全管理文件汇编上报查询',
              path: 'main/inspectionquery'
            },
            {
              subNavKey: '14',
              text: '安全管理文件汇编台账上报',
              path: 'main/inspectionreport'
            },
            {
              subNavKey: '15',
              text: '安全管理文件汇编上报查看',
              path: 'main/inspectioncheck'
            }
          ]
        },
        {
          navkey: 'nav6',
          text: '安全事故处理结果管理',
          icon: 'bank',
          children: [
            {
              subNavKey: '16',
              text: '安全事故上报查询',
              path: 'main/inspectionquery'
            },
            {
              subNavKey: '17',
              text: '安全事故台账上报',
              path: 'main/inspectionreport'
            },
            {
              subNavKey: '18',
              text: '安全事故上报查看',
              path: 'main/inspectioncheck'
            }
          ]
        }
    ],  //nav-config-end
};

export default config;

