/*global define*/

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

define(
    [
        'backbone',
        'autosuggest/collection/options'
    ],
    function (
        Backbone,
        Options
    ) {
        'use strict';

        var Autosuggest;

        Autosuggest = Backbone.Model.extend({
            defaults: {
                keyword: '',
                minChars: 3,
                selectedOption: null,
                options: new Options(),
                collapsed: true
            },

            update: function () {
                var keyword = this.get('keyword');

                if (keyword && this.get('minChars') <= keyword.length) {
                    this.fetch();
                } else {
                    this.get('options').reset();
                }
            }
        });

        return Autosuggest;
    }
);
