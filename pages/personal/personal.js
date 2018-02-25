// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  go_adress: function() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  go_discount: function() {
    wx.navigateTo({
      url: '/pages/discount/discount',
    })
  }
})