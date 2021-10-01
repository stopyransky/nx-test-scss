// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withNx = require('@nrwl/next/plugins/with-nx');

// /**
//  * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
//  **/
// const nextConfig = {
//   nx: {
//     // Set this to true if you would like to to use SVGR
//     // See: https://github.com/gregberge/svgr
//     svgr: false,
//   },
// };

// module.exports = withNx(nextConfig);

// next.config.js
// https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L68

const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');

// https://www.npmjs.com/package/next-transpile-modules
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
