import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd', './umi-plugins/plugin-demo'],
  antd: {
    // dark: true,
    import: true, // babel-plugin-import
  },
});
