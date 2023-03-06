'use strict';

/**
 * distribution-center service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::distribution-center.distribution-center');
