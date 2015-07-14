/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

import Backbone from 'backbone';

/**
 * @class Option
 */
export class Option extends Backbone.Model {
    /**
     * @returns {Object}
     */
    get defaults() {
        return {
            value: null,
            label: null
        };
    }

    /**
     * @returns {string}
     */
    get idAttribute() {
        return 'value';
    }

    /**
     * @returns {string}
     */
    get valueAttribute() {
        return 'value';
    }

    /**
     * @returns {string}
     */
    get labelAttribute() {
        return 'label';
    }

    /**
     * @returns {string|number}
     */
    getValue() {
        return this.get(this.valueAttribute);
    }

    /**
     * @returns {string}
     */
    getLabel() {
        return this.get(this.labelAttribute);
    }
}