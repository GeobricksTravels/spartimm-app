function init() {

    var root = '../../submodules/';

    require.config({

        baseUrl: 'js/libs',

        paths: {

            application: root + '../',
            APPLICATION: root + '../js/application',

            auth: root + 'auth',
            AUTH: root + 'auth/js/auth',

            home: root + 'home',
            HOME: root + 'home/js/home',

            facebook: '//connect.facebook.net/en_US/sdk'
        },

        shim: {
            bootstrap: ['jquery'],
            backbone: {
                deps: ['jquery', 'underscore'],
                exports: 'Backbone'
            },
            highcharts: ['jquery'],
            underscore: {
                exports: '_'
            },
            facebook : {
                exports: 'FB'
            }
        }

    });

    require(['APPLICATION'], function (APPLICATION) {
        alert('APPLICATION');
        APPLICATION.initialize();
    });

}