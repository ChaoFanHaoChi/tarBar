// pages/home/home.js 信息页
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
  /**
   * 页面的初始数据
   */
  data: {
    navList:['正在进行','即将开始','已结束'],
    nav_type:0,//默认选中第一个数据
    isFixed:false,//是否吸顶
    navTop:0,//nav菜单距离顶部距离
  },
  onShow(){
    // 自定义tabbar
    if(typeof this.getTabBar==='function' && this.getTabBar()){
      this.getTabBar().setData({
        selected:0
      });
    };


    console.log()
  },
  changeType(e){
    let {index}=e.currentTarget.dataset;
    if(this.data.nav_type==index || index==undefined) return;
    // this.setData({
    //   nav_type:index
    // });
    // if(this.data.isFixed){
    //   wx.pageScrollTo({
    //     selector:'#content',
    //     // duration:0.2//滚动到指定位置需要的时间
    //   })
    // }
  },
  onReady(){
    // 获取节点距离顶部的距离
    wx.createSelectorQuery().select("#nav").boundingClientRect((rect)=>{
      if(rect&&rect.top){
        this.setData({
          navTop:parseInt(rect.top)
        })
      }
    }).exec()//拼合语法有点怪？
  },
  // 监听页面滚动事件
  onPageScroll(e){
    // let scrollTop = parseInt(e.scrollTop),isFixed=scrollTop >= this.data.navTop;
    // 当页面到顶的距离>导航栏的高就吸顶
    let scrollTop = parseInt(e.scrollTop);
    let isFixed = scrollTop >= this.data.navTop;
    if(this.data.isFixed !== isFixed)(
      this.setData({
        isFixed
      })
    )
  }
})