/**
 * @source Email plugin from ouwn gmai address <https://forum.strapi.io/t/email-plugin-from-own-gmail-address/17625>
 * @source nodemailer from npm <https://www.npmjs.com/package/@strapi/provider-email-nodemailer>
 */
module.exports = ({ env }) => ({
    // email: {
    //   provider: 'nodemailer',
    //   providerOptions: {
    //     host: 'mail.mercadointeligente.online', //SMTP Host
    //     port: 465   , //SMTP Port
    //     secure: true,
    //     auth: {
    //       username: 'smtp@mercadointeligente.online',
    //       password: 'k=Yq+RD@*v#?',
    //     },
    //     tls: {
    //       rejectUnauthorized: true,
    //       requireTLS: true,
    //     },
    //     connectionTimeout: 1,
    //   },
    //   settings: {
    //     defaultFrom: 'smtp@mercadointeligente.online',
    //     defaultReplyTo: 'smtp@mercadointeligente.online',
    //   },
    //   'navigation': { enabled: false },
    // },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.google.com',
          port: 465,
          auth: {
            user: 'devhomologador@gmail.com',
            pass: 'd3v.73573',
          },
        },
        settings: {
          defaultFrom: 'devhomologador@gmail.com',
          defaultReplyTo: 'devhomologador@gmail.com',
        },
      },
    },
    celcoin: {
      enabled: true,
      resolve: './src/plugins/celcoin'
    },
    // upload: {
    //   config: {
    //     provider: 'local',
    //     providerOptions: {
    //       sizeLimit: 5 * 1024 * 1024,
    //     },
    //   },
    // },
  });