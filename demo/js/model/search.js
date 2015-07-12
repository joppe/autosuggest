/*global define*/

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

define(
    [
        'autosuggest/model/autosuggest'
    ],
    function (
        Autosuggest
    ) {
        'use strict';

        var Search;

        Search = Autosuggest.extend({
            url: function () {
                return 'http://localhost/projects/autosuggest/demo/php/proxy.php?keyword=' + this.get('keyword');
            },

            parse: function (response) {
                var options = this.get('options'),
                    data = {
                        options: options
                    };

                if (response && response.results) {
                    options.set(options.parse(response.results));
                }

                return data;
            }
        });

        return Search;
    }
);
