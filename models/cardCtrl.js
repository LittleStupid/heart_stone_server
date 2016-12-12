const CardModel = require('./card');

//列出所有用户数据，支持分页
exports.all = function(){
  return CardModel.find({});
};
