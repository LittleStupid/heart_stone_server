const CardModel = require('./card');

//列出所有用户数据，支持分页
exports.all = function(queryOption){
  // return CardModel.find({"img":{"$exists":true}}).skip(0).limit(10);
  console.log(queryOption);
  return CardModel.find(queryOption);
};

exports.hero = function(){
  return CardModel.find({ "type": "Hero",
                          "cardSet": "Basic",
                          "collectible": true });
};
