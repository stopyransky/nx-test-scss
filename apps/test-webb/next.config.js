// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');

const withTM = require('next-transpile-modules')(['react-spring'], {
  debug: true,
});

const withPWA = require('next-pwa');
const nextBaseConfig = require('../../next.base.config');

const nextConfig = {
  ...nextBaseConfig,
  reactStrictMode: true,
};

const plugins = [
  [withNx],
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        importScripts: ['/workers/test-worker.js'],
      },
    },
  ],
];

module.exports = withTM(withPlugins([...plugins], nextConfig));
