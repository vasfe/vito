/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.vitoferraro.com',
  generateRobotsTxt: false, // `robots.txt` is already manually created
  exclude: ['/server-sitemap.xml'], // if you have dynamic sitemap
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: './out', // Output sitemap to the 'out' directory for static export

  // You can add additional sitemaps for dynamic routes if needed
  // transform: async (config, path) => {
  //   return {
  //     loc: path, // => this will be updated as per the new path
  //     changefreq: config.changefreq,
  //     priority: config.priority,
  //     lastmod: config.lastmod,
  //     alternateRefs: config.alternateRefs ?? [],
  //   }
  // },
};
