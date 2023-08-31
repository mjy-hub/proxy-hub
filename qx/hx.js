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
