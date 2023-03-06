/**
 * Source: <https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/middlewares.html#internal-middlewares-configuration-reference>
*/
module.exports = [
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'DanSP.DEV <dansp.dev>',
      headers: ["Cache-Control: no-cache, no-store, must-revalidate"]
    },
  },
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
