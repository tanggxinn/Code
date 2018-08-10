/*请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，
并根据BMI指数提示：
低于18.5：过轻
18.5-25：正常
25-28：过重
28-32：肥胖
高于32：严重肥胖
用if...else...判断并显示结果*/

'use strict';

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));

var bmi = weight / height / height;

if (bmi < 18.5) {
  alert('您的BMI指数为' + bmi + ',' + '体重过轻，请您注意健康饮食。');
} else if (25 > bmi && bmi >= 18.5) {
  alert('您的BMI指数为' + bmi + ',' + '体重正常，请您继续保持。');
} else if (28 > bmi && bmi >= 25) {
  alert('您的BMI指数为' + bmi + ',' + '体重过重，请您加强锻炼。');
} else if (32 > bmi && bmi >= 28) {
  alert('您的BMI指数为' + bmi + ',' + '身材肥胖，请您作死的锻炼。');
} else {
  alert('您的BMI指数为' + bmi + ',' + '身材严重肥胖，你没救了。');
}