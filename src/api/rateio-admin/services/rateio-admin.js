'use strict';

/**
 * rateio-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rateio-admin.rateio-admin');
