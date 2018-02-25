// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowHide: true,
    winHeight: 0, // 屏高
    _num: 0, // 选中index
    count: 0, // 数量,
    touchStartTime:0,
    touchEndTime:0,
    lastTouchTime:0,  
    _isSel: false,
    show_spec: false, // 显示选规格
    show_already: false, // 显示已选产品,
    orderlist:{
      maingoods: [
        { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }
      ],
      snack: [{ text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }, { text: "热干面", mgoods: false }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let _this = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        _this.setData({
          winHeight: res.windowHeight
        })
      },
      fail: function () {
        this.setData({
          isShowHide: false
        })
        wx.showToast({
          title: '数据异常',
          icon: 'fail',
          duration: 2000
        })
      }
    })
  },
  // 菜单切换
  changeMenu: function (e) {
    this.setData({
      _num: e.target.dataset.num
    })
  },
  // 选规格
  selectSpec: function () {
    this.setData({
      show_spec: true
    })
  },
  // 选择Ok
  submit_ok: function () {
    this.setData({
      show_spec: false
    })
  },
  reduce: function () {
    var res = this.data.count;
    res--;
    if (res <= 0) {
      res = 0
    }
    console.log(this.data.count)
    this.setData({
      count: res
    })
  },
  add: function () {
    var res = this.data.count;
    res++;
    console.log(this.data.count)
    this.setData({
      count: res
    })
  },
  // 显示已选菜单
  showSel() {
    this.setData({
      show_already: true
    })
  },
  // 关闭已选菜单
  close: function() {
    this.setData({
      show_already: false
    })
  },
  // 结算
  togoplace: function() {
    wx.navigateTo({
      url: '/pages/placeOrder/placeOrder',
    })
  },
  go_goodsDetail() {
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail',
    })
  },
  /// 按钮触摸开始触发的事件
  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },
  checkmaingoods:function(e){
    let that=this;
    let num=0;
    
      if (that.touchEndTime - that.touchStartTime < 350) { //避免长按也会触发
        // 当前点击的时间
        var currentTime = e.timeStamp
        var lastTapTime = that.lastTapTime
        // 更新最后一次点击时间
        that.lastTapTime = currentTime
        console.log(currentTime, lastTapTime, 0)
        if (currentTime - lastTapTime < 300) {
            that.data.orderlist.maingoods[e.currentTarget.id].mgoods = false
            this.setData({
              orderlist: that.data.orderlist
            })
        }else{
          for (var i = 0; i < that.data.orderlist.maingoods.length; i++) {
            if (that.data.orderlist.maingoods[i].mgoods == true) {
              num = num + 1
            }
          }
          if (num > 1) {
            return false;
          }
          that.data.orderlist.maingoods[e.currentTarget.id].mgoods = true
          this.setData({
            orderlist: that.data.orderlist
          })
        }
      }
  },
  checksnack:function(e){ //选择小吃
    let that = this;

    if (that.touchEndTime - that.touchStartTime < 350) { //避免长按也会触发
      // 当前点击的时间
      var currentTime = e.timeStamp
      var lastTapTime = that.lastTapTime
      // 更新最后一次点击时间
      that.lastTapTime = currentTime
      console.log(currentTime, lastTapTime, 0)
      if (currentTime - lastTapTime < 300) {
        that.data.orderlist.snack[e.currentTarget.id].mgoods = false
        this.setData({
          orderlist: that.data.orderlist
        })
      } else {
        that.data.orderlist.snack[e.currentTarget.id].mgoods = true
        this.setData({
          orderlist: that.data.orderlist
        })
      }
   }    
  }
})