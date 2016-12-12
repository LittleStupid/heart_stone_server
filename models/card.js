const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = new Schema({
    "cardId": { type: String },
    "name": { type: String },
    "cardSet": { type: String },
    "type": { type: String },
    "faction": { type: String },
    "rarity": { type: String },
    "cost": { type: Number },
    "attack": { type: Number },
    "health": { type: Number },
    "durability": { type: Number },
    "text": { type: String },
    "inPlayText": { type: String },
    "flavor": { type: String },
    "artist": { type: String },
    "collectible": { type: Boolean },
    "elite": { type: Boolean },
    "race": { type: String },
    "playerClass": { type: String },
    "howToGet": { type: String },
    "howToGetGold": { type: String },
    "img": { type: String, default: 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/hexfrog.png' },
    "imgGold": { type: String },
    "locale": { type: String },
    "mechanics": { type: Array },
});

//创建模型
const card = mongoose.model('card', Card);

// console.log('yyyyyyyyyy');
// console.log( Card );
// console.log( 'xxxxxxxxx' );
module.exports = card;
