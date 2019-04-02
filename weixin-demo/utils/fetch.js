let fetch = (options) => {
    return new Promise(function(resolve, reject) {
        wx.request({
            url: options.url || '',
            method: options.method || 'GET',
            data: options.data || '',
            header: options.header || { 'content-type': 'application/json' }, //指定提交的数据类型
            dataType: options.dataType || 'json', //指定返回的数据类型
            success: function(res) {
                //1.相当与调用外部传递进来的then函数
                resolve(res);
            },
            fail: function(error) {
                //2.相当与调用外部传递进来的catch函数
                reject(error);
            }
        })
    })

}

module.exports = {
    fetch: fetch
}