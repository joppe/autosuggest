/*global define*/

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

define(
    [
        'autosuggest/view/input'
    ],
    function (
        Base
    ) {
        'use strict';

        var Input;

        Input = Base.extend({
            events: {
                'keyup': 'setKeyword'
            }
        });

        return Input;
    }
);
