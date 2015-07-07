define(['jquery',
        'HOME',
        'domReady!'], function($, HOME) {

    var app = {

        initialize: function() {
            this.bindEvents();
            var home = new HOME();
            home.init({});
        },

        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },

        onDeviceReady: function() {
            app.receivedEvent('deviceready');
        },

        receivedEvent: function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }

    };

    return app;

});
