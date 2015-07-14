/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

import Backbone from 'backbone';
import {Options} from 'autosuggest/collection/Options';

/**
 * @class Autosuggest
 */
export class Autosuggest extends Backbone.Model {
    /**
     * @returns {Object}
     */
    get defaults() {
        return {
            keyword: '',
            minChars: 3,
            selectedOption: null,
            options: new Options(),
            collapsed: true
        };
    }

    /**
     * Update the model by fetching the options from the server
     */
    update() {
        let keyword = this.get('keyword');

        if (keyword && this.get('minChars') <= keyword.length) {
            this.fetch({
                success: function () {
                    this.set('collapsed', 0 === this.get('options').length);
                }.bind(this)
            });
        } else {
            this.get('options').reset();
        }
    }
}