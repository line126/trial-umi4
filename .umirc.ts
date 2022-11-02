export default {
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd', './umi-plugins/plugin-demo'],
  antd: {
    // dark: true,
    import: true, // babel-plugin-import
  },
};
