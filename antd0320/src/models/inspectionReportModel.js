import dva from 'dva';

export default {
  namespace: 'inspectionReport',
  state: {
	  date: '',  //检查日期
	  joinname: 'joinname',  //参加监督检查的部门及人员
      content: 'content',  //监督检查主要内容
      questions: 'question',  //监督检查中查出的问题
      idears: 'idears',   //检查组处理意见
      dealWith: 'dealWith',  //整改结果
      companyName: 'companyName',  //受督查单位人签名
      checkName: 'checkName',    //检查人员签名
      upload: 'upload',   //上传附件
  },
  reducers: {
    
  },
};