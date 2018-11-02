module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
        // First application
        // {
        //     name      : 'Trades.core',
        //     script    : 'build/bundle.js',
        //     instances : 2,
        //     exec_mode : 'cluster',
        //     env: {},
        //     env_production : {
        //         NODE_ENV: 'production',
        //         // mailing: true
        //     }
        // }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy : {
        production : {
            user : 'root',
            host : '206.189.216.73',
            ref  : 'origin/master',
            repo : '',
            path : '/home/pst/project',
            'post-deploy' : 'npm install && typings install && npm run build && pm2 reload ecosystem.config.js --env production'
        }
    }
};
