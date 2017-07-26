const name = 'dudePWA-v2';

module.exports = {
    staticFileGlobs: [
        './index.html',
        './images/*.{png,svg,gif,jpg}',
        './css/*.css',
        './jss/*.js',
        './fonts/**/*.{woff,woff2,ttf,otf}',
        'https://fonts.googleapis.com/icon?family=Material+icons'
    ],
    stripPrefix: '.',
    // Runtime Cache
    runtimeCaching: [{
        urlPattern: /https:\/\/api\.github\.com\/search\/repositories/,
        handler: 'networkFirst',
        options: {
            cache: {
                name: name
            }
        }
    }]
};
