/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
