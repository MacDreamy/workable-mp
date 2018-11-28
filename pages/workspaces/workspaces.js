// pages/workspaces/workspaces.js
Page({

  data: {
    text: 'Who is here?',
    src: '../../lib/assets/images/bull_red.png'
  },

  onLoad: function (options) {

  },

  onReady: function () {
    console.log(this.data.text)
  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },

  goToHomePage: function () {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})