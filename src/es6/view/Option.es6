/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

import Backbone from 'backbone';

/**
 * @class Option
 */
export class Option extends Backbone.View {
    /**
     * @returns {string}
     */
    get tagName() {
        return 'li';
    }

    /**
     * @returns {Object}
     */
    get events() {
        return {
            click: 'setAsSelectedOption'
        };
    }

    /**
     * @param {Object} options
     */
    constructor(options) {
        super(options);

        this.state = options.state;
        this.template = options.template;

        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.state, 'change:selectedOption', this.updateView);
    }

    /**
     * @returns {Option}
     */
    render() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }

    setAsSelectedOption() {
        this.state.set('selectedOption', this.model);
    }

    updateView() {
        if (this.state.get('selectedOption') === this.model) {
            this.$el.addClass('is-selected');
        } else {
            this.$el.removeClass('is-selected');
        }
    }
}