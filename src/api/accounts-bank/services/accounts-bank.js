'use strict';

/**
 * accounts-bank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::accounts-bank.accounts-bank');
