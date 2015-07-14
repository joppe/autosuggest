/*global System*/

System.config({
    baseURL: '/',

    paths: {
        'autosuggest/*': 'projects/autosuggest/demo/js/autosuggest/*.js',
        'app/*': 'projects/autosuggest/demo/js/app/*.js'
    },

    map: {
        jquery: 'projects/autosuggest/demo/vendor/jquery/dist/jquery',
        underscore: 'projects/autosuggest/demo/vendor/underscore/underscore',
        backbone: 'projects/autosuggest/demo/vendor/backbone/backbone'
    },

    meta: {
        backbone: {
            deps: ['jquery', 'underscore']
        }
    },

    transpiler: 'babel'
});