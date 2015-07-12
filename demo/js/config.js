/*global require*/

require.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        jquery: './../../src/vendor/jquery/dist/jquery',
        underscore: './../../src/vendor/underscore/underscore',
        backbone: './../../src/vendor/backbone/backbone',
        autosuggest: './../../src/autosuggest'
    },
    shim: {
        backbone: ['jquery', 'underscore']
    }
});