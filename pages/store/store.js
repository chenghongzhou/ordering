Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex: 0,
    addressMain:'广东深圳',
    meunIfo: [
      { title: "中国移动", eare: "武汉店张三", address: "龙华新区民治街道星河盛世COCO", tel: '17265428966', lu: 'City一楼', hao: "L10-012号", time: '10:00-12:00', canuse: true },
      { title: "中国移动", eare: "武汉店张三", address: "龙华新区民治街道星河盛世COCO", tel: '17265428966', lu: 'City一楼', hao: "L10-012号", time: '10:00-12:00', canuse: false },
      { title: "中国移动", eare: "武汉店张三", address: "龙华新区民治街道星河盛世COCO", tel: '17265428966', lu: 'City一楼', hao: "L10-012号", time: '10:00-12:00', canuse: false },
      { title: "中国移动", eare: "武汉店张三", address: "龙华新区民治街道星河盛世COCO", tel: '17265428966', lu: 'City一楼', hao: "L10-012号", time: '10:00-12:00', canuse: false },

    ]

  },
  showMenu: function(e) {
    console.log(e)
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    })
  },
  gotoMenu: function() {
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  },
  gomap:function(){
    let that=this
    wx.chooseLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        this.addressMain= res.address
        console.log(this.addressMain,78)
        that.setData({
          addressMain: res.address
        })
      }
    })
  },
  onLoad:function(){
    
  }
})