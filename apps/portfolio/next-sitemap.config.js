/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://avinashsuthar.in", // Change this to your actual domain
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 5000,
  exclude: ["/admin", "/dashboard"], // Exclude private pages
};
