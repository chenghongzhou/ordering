Page({

  /**
   * 页面的初始数据
   */
  data: {
   isshow:true,
   srolls:true,
   quanshow:true,
   isaddress:true,
   ifos:{
      types:'好满足新年套餐',
      typenum:1,
      goods:'清椰榴莲 + 咖喱虾蟹 + 乐多多小吃拼盘（青芥末酱） + 牛油果霜（少冰）+ 蔓越莓霜（少糖）+ 12寸加量芝士',
      quan:0,
      checkgoods:[9,0],
      time:'20:20(1是外卖 0是自取,数据中)',
      discount:0,
      price:120,
      maintype:1 //1是外卖 0是自取
  }

  },
  checkAddress:function(){
    this.setData({
      isshow:false,
      srolls:false,
      isaddress:false
    })
  },
  colseaddress:function (){
    this.setData({
      isshow: true,
      srolls: true,
      isaddress:true,
      quanshow:true
    })
  },
  checkquan() {
    this.setData({
      isshow: false,
      quanshow: false,
      srolls: false
    })
  },
  gotoAdress() {
    wx.navigateTo({
      url: '/pages/addAdress/addAdress',
    })
  },
})