/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
    },
    basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
    assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
}
