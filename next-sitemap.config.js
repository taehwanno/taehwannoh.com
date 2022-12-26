/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://taehwannoh.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};

module.exports = config;
