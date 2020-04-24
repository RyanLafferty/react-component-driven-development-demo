const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  // override existing rules with some of our own
  const existingRules = config.module.rules;
  config.module.rules = [
    // loader for style sheets and modules
    {
      test:/\.(s*)css$/,
      exclude: /(node_modules|bower_components|build)/,
      oneOf: [
        {
          test: /\.module\.(s*)css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'sass-loader'
          ]
        },
        {
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: false
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    // svg loader to disable optimization
    {
      test: /\.svg$/,
      exclude: /(node_modules|bower_components|build)/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          }
        },
        'file-loader'
      ],
    },
    ...existingRules
  ];

  // Return the altered config
  return config;
};
