const CardModel = require('./card');

//列出所有用户数据，支持分页
exports.all = function(queryOption){
  console.log( queryOption );
  const ITEM_PER_PAGE = 6;

  let { cost, page, playerClass } = queryOption;
  if( page < 0 ) {
    page = 0;
  }
  let option = {};
  if( cost !== undefined ) {
    option.cost = cost;
  }
  if( playerClass && playerClass !== '' ) {
    option.playerClass = playerClass;
  }
  // console.log( option );
  // let theoption = { ...option, playerClass: playerClass };
  // let option = ( {}, ...{cost} );

  let skipNum = ITEM_PER_PAGE * page;

  return CardModel.find(option).sort({cost: 1}).skip(skipNum).limit(ITEM_PER_PAGE);
};

exports.hero = function(){
  return CardModel.find({ "type": "Hero",
                          "cardSet": "Basic",
                          "collectible": true });
};
