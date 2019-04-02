//index.js
//获取应用实例
var time = require('../../utils/util.js');
const app = getApp()
let page = 1

Page({
  data: {
    mode: "scaleToFill",
    arr: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    images: {},
    textdata: [],
  },
  onLoad: function (options) {
    var array = this.data.arr
    for (let i = 1; i < 3; i++) {
      array.push("../images/" + "banner" + i + ".png")
    }
    this.setData({
      arr: array
    })

  },
  imageLoad: function (e) {
    var $width = e.detail.width,
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 800,
      viewHeight = 800 / ratio;
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  },
  onReady: function () {
      var that = this;
      wx.request({
        url: 'https://im.meiriv.com/test/get.php?type=GetAll&page='+page+'&count=10',
        data: {

        },
        method: 'GET',
        header: { 'Content-Type': 'application/json' },
        success: function (res) {
          that.setData({
            textdata: res.data
          });
          // console.log(res.data);
        },
        fail: function () {
          // fail
        },
        complete: function () {
          
        }
      })
  },
  list:function(e){
    let listid = e.currentTarget.dataset.listid;
    wx.navigateTo({
      url: '../list/list?listid='+listid,
    })
  },
 
  onReachBottom: function () {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    page = page +1;
     wx.request({
      url: 'https://im.meiriv.com/test/get.php?type=GetAll&page='+page+'&count=10',
      data:{
       
      },
      method: "GET",
      // 请求头部
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          textdata: res.data
        });
        console.log(res.data);
        wx.hideLoading();
      }
    })
  }
})