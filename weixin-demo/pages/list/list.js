// pages/list/list.js
let httpService = require("../../utils/service.js");
let page = 1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textdata: [],
    str:[],
    base: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      newsid: options.listid
    })
    let id = this.data.newsid;
    // console.log(id)
    var _this = this;
    httpService.getDetailBean(id).then((result) => {

      _this.setData({
        str: result.data,
        textdata: JSON.parse(result.data.content)

      })
    }).catch((error) => {
      console.log(error)
    })
    // wx.request({
    //   url: 'https://im.meiriv.com/test/get.php?type=GetGraphic&id=' + id,
    //   data: {

    //   },
    //   method: 'GET',
    //   header: { 'Content-Type': 'application/json' },
    //   success: function (res) {
    //     that.setData({
    //       textdata: JSON.parse(res.data.content)
    //     });
    //     console.log(JSON.parse(res.data.content));
    //   },
    //   fail: function () {
    //     // fail
    //   },
    //   complete: function () {

    //   }
    // })

  },
  // 返回按钮的点击
  btn: function() {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    wx.request({
      url: 'https://im.meiriv.com/test/get.php?type=GetAll&page=' + page + '&count=10',
      data: {

      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          base: res.data
        });
        // console.log(res.data);
      },
      fail: function() {
        // fail
      },
      complete: function() {

      }
    })
  },
  list: function(e) {
    let listid = e.currentTarget.dataset.listid;
    wx.navigateTo({
      url: '../list/list?listid=' + listid,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(id) {
    let _this = this
    let sharetitle = _this.data.str.title
    let shareimg = _this.data.str.cover
    return {
      title: sharetitle,
      imageUrl: shareimg, // 图片 URL
      path: 'pages/list/list?id=' + id
    }
  }
})