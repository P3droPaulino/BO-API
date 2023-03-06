'use strict';

/**
 * user-meta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-meta.user-meta', ({ strapi }) =>  ({
    async patch(id, params = {}) {
        return strapi.entityService.findOne('api::user-meta.user-meta', id, this.getFetchParams(params));
    }
}));