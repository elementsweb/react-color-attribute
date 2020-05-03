const path = require('path');

module.exports = {
  stories: ['../stories/index.tsx'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json')
        },
        include: [path.resolve(__dirname)]
      }
    },
    '@storybook/addon-actions/register'
  ]
};