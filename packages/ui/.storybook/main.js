module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-postcss',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        // cssLoaderOptions: {
        //   // When you have splitted your css over multiple files
        //   // and use @import('./other-styles.css')
        //   importLoaders: 1,
        // },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
};
