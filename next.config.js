/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    loader: 'custom',
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
        permanent: true,
      },
    ];
  },
};
