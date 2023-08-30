/*




脚本作者: ios鸡神

Tg频道: https://t.me/iosapp520 

第一步先下载:http://hxqlb202309.com/#/?referral_code=22283872

第二步注册登录: 随便账号注册都可以不需要验证

第三步:登录后 点击我的 点击分享好友 复制邀请码

第四步:把邀请码放到脚本第四十七行里面去 右上角☑️保存

referral_code":"你的邀请码"

第五步:定时表达式 建议15秒刷一次  //*15 * * * * *

刷完之后 进去app点击我的 刷新一下才会显示会员



*/


const url = `https://api2.apippzqhx2.com/WebApp/Register?data_param=oAutlhpwLXxs8vwzXcifjw%253D%253D&t=1693118030`;
const method = `POST`;
const headers = {
    'Origin' : `http://hxqlb202309.com`,
    'Accept-Encoding' : `gzip, deflate, br`,
    'Connection' : `keep-alive`,
    'Content-Type' : `application/json`,
    'Accept' : `application/json, text/plain, */*`,
    'Host' : `api2.apippzqhx2.com`,
    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1`,
    'Referer' : `http://hxqlb202309.com/`,
    'Accept-Language' : `zh-cn`
};

// 在referral_code后面填写你的邀请码

// 22283872是我的

const body = `{"referral_code":"22566078","client_system":4,"password":"qq123456","email":"96jm5@163.com"}`;

const randomEmail = Math.random().toString(36).substring(7) + '@163.com';
const randomPassword = Math.random().toString(36).substring(2,17);

const modifiedBody = body.replace(/"email":"[^"]+"/, `"email":"${randomEmail}"`).replace(/"password":"[^"]+"/, `"password":"${randomPassword}"`);

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: modifiedBody
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
