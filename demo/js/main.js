/*global require*/

require(
    [
        'config'
    ],
    function () {
        'use strict';

        require(
            [
                'jquery',
                'underscore',
                'model/search',
                'view/input'
            ],
            function (
                $,
                _,
                Search,
                Input
            ) {
                var model = new Search();

                window.state = model;

                new Input({
                    model: model,
                    el: $('#autosuggest'),
                    optionsTemplate: _.template($('#options-tpl').html()),
                    optionTemplate: _.template($('#option-tpl').html())
                });
            }
        );
    }
);