/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

import {Input as Base} from 'autosuggest/view/Input';

/**
 * @class Input
 */
export class Input extends Base {
    /**
     * @returns {Object}
     */
    get events() {
        return {
            'keyup': 'handleInputChange',
            'focus': 'setFocus'
        };
    }
}