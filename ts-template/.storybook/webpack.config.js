const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  // add typescript extensions
  config.resolve.extensions.push(".ts", ".tsx");

  let existingRules = config.module.rules;

  // update css rule to ignore css modules
  const cssRule = existingRules.find(rule => rule.test.test('test.css'));
  cssRule.exclude = /\.module\.css$/;

  // update static media rule to ignore svgs
  const svgRule = existingRules.find(rule => rule.test.test('test.svg'));
  svgRule.exclude = /\.svg$/;

  // add some of our own rules before the storybook rules
  config.module.rules = [
    //typescript loader
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /(node_modules|bower_components|build)/,
      loader: 'babel-loader',
      options: {
        presets: [
          [
            'react-app',
            {
              flow: false,
              typescript: true,
            },
          ]
        ]
      },
    },
    // loader for scss style sheets and modules
    {
      test:/\.scss$/,
      exclude: /(node_modules|bower_components|build)/,
      oneOf: [
        {
          test: /\.module\.scss$/,
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
    // loader for css modules
    {
      test:/\.module\.css$/,
      exclude: /(node_modules|bower_components|build)/,
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
