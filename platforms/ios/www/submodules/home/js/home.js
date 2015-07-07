define(['jquery',
        'handlebars',
        'text!home/html/templates.hbs',
        'i18n!home/nls/translate',
        'AUTH'], function($, Handlebars, templates, translate, AUTH) {

    'use strict';

    function HOME() {
        this.CONFIG = {
            lang: 'en',
            placeholder_id: 'placeholder'
        }
    }

    HOME.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Load sign-in page. */
        var source = $(templates).filter('#login_structure').html();
        var template = Handlebars.compile(source);
        var dynamic_data = {
            facebook_login_label: translate.facebook_login_label,
            google_login_label: translate.google_login_label
        };
        var html = template(dynamic_data);
        $('#' + this.CONFIG.placeholder_id).html(html);

        /* Load Google sign-in. */
        AUTH.google();

        /* Load Facebook sign-in. */
        $('#facebook_login').click(function() {
            AUTH.facebook();
        });

    };

    return HOME;

});