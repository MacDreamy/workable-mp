// pages/new/new.js
Page({

  /**
   * Page initial data
   */
  data: {
    src: '../../lib/assets/images/bull_red.png',
    array: ['indica', 'hybrid', 'sativa', 'other'],
    objectArray: [
      {
        id: 0,
        name: 'indica'
      },
      {
        id: 1,
        name: 'hybrid'
      },
      {
        id: 2,
        name: 'sativa'
      },
      {
        id: 3,
        name: 'other'
      }
    ],
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  grantAuthorizeLocation: function () {
    wx.authorize({
      scope: 'scope.address',
      success(res) {
        console.log(33, res)
        wx.chooseLocation({
          success: function (res) {
            console.log(44, res)
          }
        })
      },
      fail(err) {
        console.log(44, err)
      }
    })
  },
  bindSubmit: function (e) {
    let workspace = {
      address: address,
      category: category,
      name: name
    }

    wx.request({
      url: `https://workspace-api333.herokuapp.com/api/v1/workspaces`,
      method: 'POST',
      data: workspace,
      success() {
        wx.redirectTo({
          url: '/pages/workspaces/workspaces'
        });
      }
    })
  }
})