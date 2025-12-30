/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/new_years_card' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/new_years_card' : '',
  
  // Ensure proper static file handling
  experimental: {
    // This helps with static file serving on GitHub Pages
    optimizeCss: false,
  },
  
  // i18n configuration for static export
  // Note: Next.js i18n config is not compatible with output: "export"
  // We handle i18n routing manually through dynamic routes and generateStaticParams
}

module.exports = nextConfig
