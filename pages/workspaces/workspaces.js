// pages/workspaces/workspaces.js
Page({

  data: {
    src: '../../lib/assets/images/bull_red.png'
  },

  onLoad: function (options) {

  },

  onReady: function () {

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
  showWorkspace(e) {
    const data = e.currentTarget.dataset;
    const workspace = data.workspace;

    wx.navigateTo({
      url: '/pages/space/space?id=${workspace.id}',
    });
  },
  goToHomePage: function () {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})