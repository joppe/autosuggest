/*global define*/

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

define(
    [
        'backbone',
        'autosuggest/model/option'
    ],
    function (
        Backbone,
        Option
    ) {
        'use strict';

        var Options;

        Options = Backbone.Collection.extend({
            model: Option
        });

        return Options;
    }
);
