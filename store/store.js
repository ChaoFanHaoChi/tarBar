import {observable,action} from 'mobx-miniprogram'

export const store=observable({
  tabNum:null,
  setTabNum:action(function(newTabNum){
    this.tabNum=newTabNum
    console.log("tabNum",this.tabNum)
  }),
})