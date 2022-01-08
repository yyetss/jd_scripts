/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  'olmijoxgmjutzcbkzw4njrhy3l3gwuh6g2qzsvi@olmijoxgmjuty4tpgnpbnzvu4pl6hyxp3sferqa@h3cggkcy6agkh4ozcp5idack3aupbxyuunf2oti@wsr6thb5bd25kamxdqdkgw2m5zfiwo4o66p6saa@l4ex6vx6yynouz2vsrqlkogw4gvwf5sihbmchdq@mlrdw3aw26j3wr2yqio56gorvjr3eg2sexktgka@yhgveqpmpmqznowjokrdphjyccjxzvhqmgknb5y@4npkonnsy7xi3rl5e2zndfwam7tg55d755gpv6q@fn2tky53tbmacesqncz2stqcbe@7qol36k2wexalglnrnjrdxrbcbdzbbzixcqkexq@eue4n3cmgc7extlgjawrxcnyubsxxsymxlvzxyy@gcdr655xfdjq6szyyv6pisgvo2jyrjvof32d3eq@msc3kf7ifquqvryw4crdvuxncu3h7wlwy7o5jii@yhgveqpmpmqzmso7t3oxixw4i24hinapyrjpdpa@rzczt376xqidayqvu3rj6dg3vxkv6kuknbxv7rtlvqypdnfnetjq@4npkonnsy7xi2lsmont4zoagevn27ncit4lhrli@vysdmzeemajlsjcefgyul5ldd45ac3f4ijdgqji@e7lhibzb3zek2zin4gnao3gynqwqgrzjyopvbua@4npkonnsy7xi3smz2qmjorpg6ldw5otnabrmlei@ut6udag76k4avu56mxeser5ouq@cl5btmbrxep62v5kaarr4z5xcx5iguzsi7atlui@llbagbstv7yg5bhrz76cpgnh7y@wrqpt6mmzjh2zi2lqh5hbcfa6o6s7v537eegvmy@rj7s6mzlk7uogqfsgds6zxzfmizctjykr6gj2uq',
  'olmijoxgmjutzcbkzw4njrhy3l3gwuh6g2qzsvi@olmijoxgmjuty4tpgnpbnzvu4pl6hyxp3sferqa@h3cggkcy6agkh4ozcp5idack3aupbxyuunf2oti@wsr6thb5bd25kamxdqdkgw2m5zfiwo4o66p6saa@l4ex6vx6yynouz2vsrqlkogw4gvwf5sihbmchdq@mlrdw3aw26j3wr2yqio56gorvjr3eg2sexktgka@yhgveqpmpmqznowjokrdphjyccjxzvhqmgknb5y@4npkonnsy7xi3rl5e2zndfwam7tg55d755gpv6q@fn2tky53tbmacesqncz2stqcbe@7qol36k2wexalglnrnjrdxrbcbdzbbzixcqkexq@eue4n3cmgc7extlgjawrxcnyubsxxsymxlvzxyy@gcdr655xfdjq6szyyv6pisgvo2jyrjvof32d3eq@msc3kf7ifquqvryw4crdvuxncu3h7wlwy7o5jii@yhgveqpmpmqzmso7t3oxixw4i24hinapyrjpdpa@rzczt376xqidayqvu3rj6dg3vxkv6kuknbxv7rtlvqypdnfnetjq@4npkonnsy7xi2lsmont4zoagevn27ncit4lhrli@vysdmzeemajlsjcefgyul5ldd45ac3f4ijdgqji@e7lhibzb3zek2zin4gnao3gynqwqgrzjyopvbua@4npkonnsy7xi3smz2qmjorpg6ldw5otnabrmlei@ut6udag76k4avu56mxeser5ouq@cl5btmbrxep62v5kaarr4z5xcx5iguzsi7atlui@llbagbstv7yg5bhrz76cpgnh7y@wrqpt6mmzjh2zi2lqh5hbcfa6o6s7v537eegvmy@rj7s6mzlk7uogqfsgds6zxzfmizctjykr6gj2uq',
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.PLANT_BEAN_SHARECODES.length > 0 && !process.env.PLANT_BEAN_SHARECODES) {
//   process.env.PLANT_BEAN_SHARECODES = logShareCodes.PLANT_BEAN_SHARECODES.join('&');
// }

// 判断github action里面是否有种豆得豆互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(PLANT_BEAN_SHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
