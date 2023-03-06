'use strict';

/**
 * webhook controller
 * @source CUSTOM CONTROLLER STRAPI <https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html#adding-a-new-controller>
 * @source STRAPI WEBHOOK <https://strapi.io/blog/strapi-webhooks>
 * @source How to get raw request body in Strapi controller <https://forum.strapi.io/t/how-to-get-raw-request-body-in-strapi-controller/12113/2>
 * @source Payloads <https://docs.strapi.io/developer-docs/latest/development/backend-customization/webhooks.html#payloads>
 * @source NODE WEBHOOK <https://github.com/roccomuso/node-webhooks/blob/master/example.js>
 */

const { createCoreController } = require('@strapi/strapi').factories;
const ccAPI = require("../../../plugins/celcoinAuth/helpers");
const env = process.env;

module.exports = createCoreController('api::webhook.webhook', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
  
    async create(ctx) {
      // const response = await super.create(ctx);
      const { data } = ctx.request.body; //Source <https://forum.strapi.io/t/how-to-get-raw-request-body-in-strapi-controller/12113/2>
      // const { data } = ctx.request.query;
      const d = {};
      d['data'] = data;
      // d['ctx'] = ctx;
      // d['celcoin'] = await ccAPI.celcoinToken();
      
      return d;
    },

    async update(ctx) {
      // const response = await super.update(ctx);
      const data = {
        "status": false,
        "disabled": true
      }
      return data;
    },

    async exampleAction(ctx) {
      try {
        ctx.body = 'ok';
      } catch (err) {
        ctx.body = err;
      }
    },
  
    // Method 2: Wrapping a core action (leaves core logic in place)
    async find(ctx) {
      // some custom logic here
    //   ctx.query = { ...ctx.query, local: 'en' };
  
      // Calling the default core action
      const { data, meta } = await super.find(ctx);
  
      // some more custom logic
      meta.date = Date.now();
  
      return { data, meta };
    },
  
    // Method 3: Replacing a core action
    async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;
  
      const entity = await strapi.service('api::webhook.webhook').findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    },
  }));
