// pages/mine/mine.js 我的
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
        selected:4
      })
    }
  },

})