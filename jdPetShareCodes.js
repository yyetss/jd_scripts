/*
东东萌宠互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PetShareCodes = [
  'MTE1NDAxNzcwMDAwMDAwNDE3MDkwNzE=@MTE1NDUyMjEwMDAwMDAwNDE3NDU2MjU=@MTEzMzI0OTE0NTAwMDAwMDA0MTc0NTcxMw==@MTE1NDQ5OTIwMDAwMDAwNDQyNTAwMjM=@MTE1NDQ5MzYwMDAwMDAwNDQyMjg4OTc=@MTE1NDAxNzgwMDAwMDAwNDI1NDcwMzU=@MTE1NDQ5MzYwMDAwMDAwNDUzNjI4NjM=@MTE0MDQ3MzEwMDAwMDAwNDk0Mzk1NDU=@MTEzMzI0OTE0NTAwMDAwMDA0NDU1ODUxNw==@MTE1NDQ5OTUwMDAwMDAwNDUzNjI4NjU=@MTE1NDQ5OTIwMDAwMDAwNDQyMjg2OTU=@MTE1NDAxNzgwMDAwMDAwNDQyMjg4OTU=@MTE1MzEzNjI2MDAwMDAwMDY3NjExNTA3@MTEzMzI1MTE4NTAwMDAwMDA2NzYyNDQxMw==@MTE1NDQ5OTUwMDAwMDAwNDQ4ODg3NjE=@MTEzMzI0OTE0NTAwMDAwMDA0NDg4ODkyNQ==@MTE1NDQ5OTUwMDAwMDAwMzk2NTY2MTk=@MTE1NDQ5MzYwMDAwMDAwMzk2NTY2MTE=@MTAxODc2NTEzMjAwMDAwMDAzMjcyNDgyMQ==@MTAxODcxOTI2NTAwMDAwMDAwMjM1OTI5OQ==@MTAxODc2NTEzMzAwMDAwMDAxNDEzNTM0Nw==@MTExMjUyNTgxMDAwMDAwMDcwMTY5MjIx@MTEyOTEzNzMzMDAwMDAwMDUxMTYzMzQ3@MTE1NDY3NTMwMDAwMDAwNzAzNjM2NDc=',
  'MTE1NDAxNzcwMDAwMDAwNDE3MDkwNzE=@MTE1NDUyMjEwMDAwMDAwNDE3NDU2MjU=@MTEzMzI0OTE0NTAwMDAwMDA0MTc0NTcxMw==@MTE1NDQ5OTIwMDAwMDAwNDQyNTAwMjM=@MTE1NDQ5MzYwMDAwMDAwNDQyMjg4OTc=@MTE1NDAxNzgwMDAwMDAwNDI1NDcwMzU=@MTE1NDQ5MzYwMDAwMDAwNDUzNjI4NjM=@MTE0MDQ3MzEwMDAwMDAwNDk0Mzk1NDU=@MTEzMzI0OTE0NTAwMDAwMDA0NDU1ODUxNw==@MTE1NDQ5OTUwMDAwMDAwNDUzNjI4NjU=@MTE1NDQ5OTIwMDAwMDAwNDQyMjg2OTU=@MTE1NDAxNzgwMDAwMDAwNDQyMjg4OTU=@MTE1MzEzNjI2MDAwMDAwMDY3NjExNTA3@MTEzMzI1MTE4NTAwMDAwMDA2NzYyNDQxMw==@MTE1NDQ5OTUwMDAwMDAwNDQ4ODg3NjE=@MTEzMzI0OTE0NTAwMDAwMDA0NDg4ODkyNQ==@MTE1NDQ5OTUwMDAwMDAwMzk2NTY2MTk=@MTE1NDQ5MzYwMDAwMDAwMzk2NTY2MTE=@MTAxODc2NTEzMjAwMDAwMDAzMjcyNDgyMQ==@MTAxODcxOTI2NTAwMDAwMDAwMjM1OTI5OQ==@MTAxODc2NTEzMzAwMDAwMDAxNDEzNTM0Nw==@MTExMjUyNTgxMDAwMDAwMDcwMTY5MjIx@MTEyOTEzNzMzMDAwMDAwMDUxMTYzMzQ3@MTE1NDY3NTMwMDAwMDAwNzAzNjM2NDc=',
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.PETSHARECODES.length > 0 && !process.env.PETSHARECODES) {
//   process.env.PETSHARECODES = logShareCodes.PETSHARECODES.join('&');
// }

// 判断github action里面是否有东东萌宠互助码
if (process.env.PETSHARECODES) {
  if (process.env.PETSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东萌宠互助码选择的是用&隔开\n`)
    PetShareCodes = process.env.PETSHARECODES.split('&');
  } else if (process.env.PETSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东萌宠互助码选择的是用换行隔开\n`)
    PetShareCodes = process.env.PETSHARECODES.split('\n');
  } else {
    PetShareCodes = process.env.PETSHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(PETSHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PetShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PetShareCode' + index] = PetShareCodes[i];
}
