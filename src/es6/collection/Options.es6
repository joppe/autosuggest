/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

import Backbone from 'backbone';
import {Option} from 'autosuggest/model/Option';

/**
 * @class Options
 */
export class Options extends Backbone.Collection {
    /**
     * @returns {Option}
     */
    get model() {
        return Option;
    }
}