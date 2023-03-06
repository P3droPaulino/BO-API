'use strict';

/**
 * user-meta controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-meta.user-meta', ({ strapi }) =>  ({
    async patch(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
    
        const entity = await strapi.service('api::user-meta.user-meta').patch(id, query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    
        return this.transformResponse(sanitizedEntity);
      }
}));
