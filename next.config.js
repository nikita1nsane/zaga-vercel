/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: false,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, child_process: false, tls: false };

        return config;
    },
};