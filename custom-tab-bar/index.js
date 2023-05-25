// tbb
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'
Component({
  behaviors:[storeBindingsBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    dIndex:null,
    selected:null,//当前选中
    // tabbar列表 与app.json保持一致
    list:[{
      "id":0,
      "pagePath": "/pages/home/home",
      "iconPath": "/images/26.jpg",
      "text": "主页"
    },{
      "id":1,
      "pagePath": "/pages/play/play",
      "iconPath": "/images/26.jpg",
      "text": "爱玩"
    },
    {
      "id":2,
      "pagePath": "/pages/new/new",
      "iconPath": "/images/26.jpg",
      "text": "发布"
    // },
    // {
    //   "id":3,
    //   "pagePath": "pages/message/message",
    //   "iconPath": "/images/26.jpg",
    //   "text": "消息"
    // },
    // {
    //   "id":4,
    //   "pagePath": "pages/mine/mine",
    //   "iconPath": "/images/26.jpg",
    //   "text": "我的"
    }]
  },
  storeBindings:{
    store,
    fields:{
      tabNum:'tabNum'
    },
    actions:{
      setTabNum : 'setTabNum'
    }
  },
/**
 * 组件的方法列表111
 */
  methods:{
    switchTab1(e){
      /* 迷惑：
      1.e.currentTarget.dataset 这东西没有index
      2.url 这东西少个/，根本不能直接用
      为何教程能用？
       */ 
 
      var {index,url}=e.currentTarget.dataset;
      // url='/'+url;
      console.log("url:",e.currentTarget);
      // if(this.data.selected==index||index==undefined) 
      // return;
      wx.switchTab({
        url
      })
    },
    goto(e){
      console.log("tabNum前",this.data.tabNum);
      console.log("e.currentTarget.dataset",e.currentTarget.className);
      if(e.currentTarget.dataset.index!=this.data.tabNum){
        this.setTabNum(e.currentTarget.dataset.index);
      };
      console.log("tabNum后",this.data.tabNum);

      // const query=wx.createSelectorQuery();
      // query.select('.item').boundingClientRect();
      // query.exec(function(res){
      //   console.log("res",res)
      // })


      const {url}=e.currentTarget.dataset;
      console.log("selected",this.data.selected);
      wx.switchTab({
        url
      })
    }, 
  },
  // observers:{
  //   'selected'(newslected){
  //     console.log("selected change",newslected);
  //   }
  // }

})