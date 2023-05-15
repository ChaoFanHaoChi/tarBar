// pages/home/home.js 首页
Component({

  /**
   * 页面的初始数据
   */
  data: {
    selected:null,//当前选中
    // tabbar列表 与app.json保持一致
    list:[{
      "pagePath": "pages/home/home",
      "iconPath": "/images/26.jpg",
      "selectedIconPath": "/images/32.jpg",
      "text": "主页"
    },{
      "pagePath": "pages/play/play",
      "iconPath": "/images/26.jpg",
      "selectedIconPath": "/images/32.jpg",
      "text": "爱玩"
    },
    {
      "pagePath": "pages/new/new",
      "iconPath": "/images/26.jpg",
      "selectedIconPath": "/images/32.jpg",
      "text": "发布"
    },
    {
      "pagePath": "pages/message/message",
      "iconPath": "/images/26.jpg",
      "selectedIconPath": "/images/32.jpg",
      "text": "消息"
    },
    {
      "pagePath": "pages/mine/mine",
      "iconPath": "/images/26.jpg",
      "selectedIconPath": "/images/32.jpg",
      "text": "我的"
    }]
  },
/**
 * 组件的方法列表
 */
  methods:{
    switchTab1(e){
      /* 迷惑：
      1.e.currentTarget.dataset 这东西没有index
      2.url 这东西少个/，根本不能直接用
      为何教程能用？
       */ 

      var {index,url}=e.currentTarget.dataset;
      url='/'+url;
      console.log("url:",e.currentTarget);
      // if(this.data.selected==index||index==undefined) 
      // return;
      wx.switchTab({
        url
      })
    }
  } 


})