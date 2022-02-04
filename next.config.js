const { withContentlayer } = require("next-contentlayer");

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
// });

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer()({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
});
