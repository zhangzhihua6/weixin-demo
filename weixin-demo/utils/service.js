// 1.引入发起网络请求的函数，导入fetch函数
const fecth = require('./fetch.js').fetch;

// 2.获取首页的数据（ 以后可以在这里扩展，方便后期维护 ）
const getHomeBean = (page) => {

  //4.发起网络请求
  return fecth({
    url: 'https://im.meiriv.com/test/get.php' + '?type=GetAll&page=' + page + '&count=10'
  });

}
// 3.获取文章详情页的数据
const getDetailBean = (id) => {
  //4.发起网络请求

  let detailUrl = 'https://im.meiriv.com/test/get.php' + '?type=GetGraphic&id=' + id
  return fecth({
    url: detailUrl
  });

}

module.exports = {
  getHomeBean: getHomeBean,
  getDetailBean: getDetailBean
}