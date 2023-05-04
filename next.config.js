const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    webpack(config) {
        config.resolve.alias['@'] = path.join(__dirname, 'src'),
            config.module.rules.push({
                test: /\.(mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/sounds/',
                        },
                    },
                ],
            });
        return config
    },
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en'
    }
}