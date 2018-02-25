// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    index: '',
    address:null
  },
  onLoad: function (options) {
    //获得dialog组件
   let ss = JSON.parse(options.address)
   console.log(this.data.address)
   this.setData({
     address:ss
   })
  },
  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  }

})