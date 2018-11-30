//index.js
//获取应用实例
const app = getApp()

Page({
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  goToWorkspacesPage: function() {
    wx.switchtab({
      url: '/pages/workspaces/workspaces'
    })
    console.log("click")
  }
})