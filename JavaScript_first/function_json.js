
//查看雅虎天气获取返回json并返回

'use strict'

var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json';
// 从远程地址获取JSON:
$.getJSON(url, function (data) {
    // 获取结果:
    var city = data.query.results.channel.location.city;
    var forecast = data.query.results.channel.item.forecast;
    var result = {
        city: city,
        forecast: forecast
    };
    alert(JSON.stringify(result, null, '  '));
});