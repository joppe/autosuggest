/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

import Backbone from 'backbone';
import {Options} from 'autosuggest/view/Options';

/**
 * @class Input
 */
export class Input extends Backbone.View {
    /**
     * @param {Object} options
     */
    constructor(options) {
        super(options);

        let $body = $('body'),
            list = new Options({
                $reference: this.$el,
                model: this.model.get('options'),
                state: this.model,
                template: options.optionsTemplate,
                optionTemplate: options.optionTemplate
            });

        $body.append(list.render().$el);
        $body.on('click', _.bind(function () {
            this.model.set('collapsed', true);
        }, this));
        this.$el.on('click', function (event) {
            event.stopPropagation();
        });

        this.listenTo(this.model, 'change:keyword', this.onKeywordChange);
        this.listenTo(this.model, 'change:selectedOption', this.onSelectedOptionChange);
    }

    setFocus() {
        if (0 < this.model.get('options').length) {
            this.model.set('collapsed', false);
        }
    }

    handleInputChange() {
        this.model.set('keyword', this.getInputValue());
    }

    getInputValue() {
        return this.$el.val();
    }

    setInputValue(value) {
        this.$el.val(value);
    }

    onKeywordChange() {
        this.model.update();
    }

    onSelectedOptionChange() {
        let value = this.model.get('selectedOption').getLabel();

        this.model.set('keyword', value, {
            silent: true
        });
        this.model.get('options').reset();
        this.setInputValue(value);
    }
}