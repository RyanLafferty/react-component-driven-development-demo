const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  // add style module loader
  config.module.rules.push({
    test:/\.module.(s*)css$/,
    exclude: /(node_modules|bower_components|build)/,
    use:[
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          minimize: false
        }
      }, 
      'sass-loader'
    ]
  });

  // add stylesheet loader
  config.module.rules.push({
    test:/\.(s*)css$/,
    exclude: /(node_modules|bower_components|build)/,
    use:[
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: false,
          minimize: false
        }
      }, 
      'sass-loader'
    ]
  });

  // override svg loader to disable optimization
  const existingRules = config.module.rules;
  config.module.rules = [
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
