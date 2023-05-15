// pages/message/message.js 信息页
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow(){
    // 自定义tabbar
    if(typeof this.getTabBar==='function' && this.getTabBar()){
      this.getTabBar().setData({
        selected:3
      })
    }
  },
  
})