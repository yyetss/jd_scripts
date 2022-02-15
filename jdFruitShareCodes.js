/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
 '64304080a2714e1cac59af03b0009581@e9333dbf9c294ad6af2792dacc236fe7@f6f58dc91bad4e24b9dd6f9a1ba19950@4f53be3edea541268b1b948456d6ff4e@674922141a014f13bdd882e8b5c15916@51639c4ddebd431b842fb10089ade73f@ceffcfd7afee4553999b660982e45275@282db86a2e9b494d918563ed78125377@b6fc2988ac6740f092a2ee3da40ebd74@010abbafb641440ca25a5bd8f23ec477@5935fea0d65346adac6215bab9e1bcbb@a977bcdcb8a2410b8a8db8c2826e05e7@c298dcf3f6e34d4daadc619022ad3812@6344a96ff0c94f628f716e5816416f54@464d68e413c242309d843d2900f774ed@067bc287d3bc4fe58f9fd1acb3109975@8ab904ca73c74eb4a94206b87f5c3a99@4f205d80700c4591a1484b739503e4b7@e941a4c3eb7748e78a37c95f5ed2b24a@b357c1247d5d43b5b196fce423e3097f',
 '64304080a2714e1cac59af03b0009581@e9333dbf9c294ad6af2792dacc236fe7@f6f58dc91bad4e24b9dd6f9a1ba19950@4f53be3edea541268b1b948456d6ff4e@674922141a014f13bdd882e8b5c15916@51639c4ddebd431b842fb10089ade73f@ceffcfd7afee4553999b660982e45275@282db86a2e9b494d918563ed78125377@b6fc2988ac6740f092a2ee3da40ebd74@010abbafb641440ca25a5bd8f23ec477@5935fea0d65346adac6215bab9e1bcbb@a977bcdcb8a2410b8a8db8c2826e05e7@c298dcf3f6e34d4daadc619022ad3812@6344a96ff0c94f628f716e5816416f54@464d68e413c242309d843d2900f774ed@067bc287d3bc4fe58f9fd1acb3109975@8ab904ca73c74eb4a94206b87f5c3a99@4f205d80700c4591a1484b739503e4b7@e941a4c3eb7748e78a37c95f5ed2b24a@b357c1247d5d43b5b196fce423e3097f',
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.FRUITSHARECODES.length > 0 && !process.env.FRUITSHARECODES) {
//   process.env.FRUITSHARECODES = logShareCodes.FRUITSHARECODES.join('&');
// }

// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(FRUITSHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
