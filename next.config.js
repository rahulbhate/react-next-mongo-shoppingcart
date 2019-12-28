const withCSS = require("@zeit/next-css");

require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");

/* Without CSS Modules, with PostCSS */
module.exports = withCSS(
    {
        webpack(config, options) {
            config.plugins = config.plugins || [];
            config.plugins = [
                ...config.plugins,
                // Read the .env file
                new Dotenv({
                    path: path.join(__dirname, ".env"),
                    systemvars: true
                })
            ];
            return config;
        }
    }
);

// next.config.js
// exports.default = {
//     env: {
//         MONGO_USER: 'admin',
//         NODE_ENV: 'production',
//         MONGO_PASSWORD: 'Veda@3!6',
//         MONGO_DB: 'react-serverside-dev',
//         PASSWORD: 'rBhate2007',
//         EMAIL: 'bhate.rahul@gmail.com'
//     }
//   };