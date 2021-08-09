const CracoLessPlugin = require('craco-less');

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          {
            plugin: CracoLessPlugin,
            options: {
              lessLoaderOptions: {
                lessOptions: {
                  javascriptEnaled: true
                }
              }
            }
          }
        ],
      },
    },
  }