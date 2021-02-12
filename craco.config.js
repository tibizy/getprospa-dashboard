/* craco.config.js */
const CracoLessPlugin = require('craco-less');


module.exports = {
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { 
                    '@primary-color': '#FA4A84',
                    '@btn-height-base': '50px',
                    '@input-height-base': '44px',
                    '@input-bg': '#F4F8FB'
                 },
                javascriptEnabled: true,
              },
            },
          },
        },
    ],
};