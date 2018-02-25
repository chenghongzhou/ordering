Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordered: [
      { address: "楚河汉界",store:'xxx店', types:'好好吃啊',num:1,price:32 },
      { address: "楚河汉界", store: 'xxx店', types: '好好吃啊', num: 1, price: 32 },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  godetials(){
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail',
    })
  },
  
})