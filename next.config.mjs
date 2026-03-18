/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  basePath: '/tatiana-daniel',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}
export default config
