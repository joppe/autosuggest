import {Autosuggest} from 'autosuggest/model/Autosuggest';

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

/**
 * @class Search
 */
export class Search extends Autosuggest {
    /**
     * @returns {string}
     */
    url() {
        return 'http://localhost/projects/autosuggest/demo/php/proxy.php?keyword=' + this.get('keyword');
    }

    /**
     * @param {Object} response
     * @returns {Object}
     */
    parse(response) {
        let options = this.get('options'),
            data = {
                options: options
            };

        if (response && response.results) {
            options.set(options.parse(response.results));
        }

        return data;
    }
}