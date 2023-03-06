'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('celcoin')
      .service('myService')
      .getWelcomeMessage();
  },
});
