const cardCtrl = require('../models/cardCtrl');

var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];

module.exports = {
    'GET /api/products': async (ctx, next) => {
      console.log('VISIT PRODUCTS');
        ctx.response.type = 'application/json';
        ctx.response.body = {
            products: products
        };
    },

    'GET /api/all': async (ctx, next) => {
        // console.log('&&&');
        // console.log(ctx.query);
        // console.log('&&&');
        ctx.response.type = 'application/json';
        ctx.response.body = await cardCtrl.all(ctx.query);
    },

    'GET /api/hero': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = await cardCtrl.hero();
    },

    'GET /api/cardbacks': async (ctx, next) => {
      var backs = [
        {
          "cardBackId": "0",
          "name": "Classic",
          "description": "The only card back you’ll ever need.",
          "source": "startup",
          "sourceDescription": "Default",
          "enabled": true,
          "img": "http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png",
          "imgAnimated": "http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Default.gif",
          "sortCategory": "1",
          "sortOrder": "1",
          "locale": "enUS"
        },
        {
          "cardBackId": "1",
          "name": "Pandaria",
          "description": "Hearthstone is a very popular game in Pandaria.  Official card game of the Shado-Pan!",
          "source": "season",
          "sourceDescription": "Season",
          "howToGet": "Acquired from achieving Rank 20 in Ranked Play, April 2014.",
          "enabled": true,
          "img": "http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Pandaria.png",
          "imgAnimated": "http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Pandaria.gif",
          "sortCategory": "5",
          "sortOrder": "0",
          "locale": "enUS"
        }
      ];
      ctx.response.body = backs;
    },

    'POST /api/products': async (ctx, next) => {
        var p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        products.push(p);
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
};
