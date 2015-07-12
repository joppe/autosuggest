/*global define*/

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

define(
    [
        'backbone'
    ],
    function (
        Backbone
    ) {
        'use strict';

        var Option;

        Option = Backbone.Model.extend({
            defaults: {
                value: null,
                label: null
            },

            idAttribute: 'value',

            valueAttribute: 'value',

            labelAttribute: 'label',

            getValue: function () {
                return this.get(this.valueAttribute);
            },

            getLabel: function () {
                return this.get(this.labelAttribute);
            }
        });

        return Option;
    }
);
