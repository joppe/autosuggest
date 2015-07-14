/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

import Backbone from 'backbone';
import {Option} from 'autosuggest/view/Option';

/**
 * @class Options
 */
export class Options extends Backbone.View {
    /**
     * @returns {string}
     */
    get tagName() {
        return 'ol';
    }

    /**
     * @param {Object} options
     */
    constructor(options) {
        super(options);

        this.state = options.state;
        this.template = options.template;
        this.optionTemplate = options.optionTemplate;
        this.$reference = options.$reference;

        this.$el.on('click', function (event) {
            event.stopPropagation();
        });

        $(window).on('resize', _.bind(this.position, this));

        this.listenTo(this.model, 'add', this.addOption);
        this.listenTo(this.model, 'remove', this.removeOption);
        this.listenTo(this.model, 'reset', this.removeOptions);
        this.listenTo(this.state, 'change:collapsed', this.update);
    }

    position() {
        let offset = this.$reference.offset(),
            left = offset.left,
            top = offset.top + this.$reference.height();

        this.$el.css({
            left: left,
            top: top,
            width: this.$reference.width()
        });
    }

    /**
     * @param {Option} model
     */
    addOption(model) {
        let view = new Option({
            model: model,
            state: this.state,
            template: this.optionTemplate
        });

        this.$el.append(view.render().$el);
    }

    /**
     * @param {Option} model
     */
    removeOption(model) {
        model.trigger('destroy');
    }

    /**
     * @param {Array} models
     * @param {Object} options
     */
    removeOptions(models, options) {
        _.each(options.previousModels, function (model) {
            model.trigger('destroy');
        });
    }

    /**
     * @returns {Options}
     */
    render() {
        this.update();

        this.$el.html(this.template(this.state.toJSON()));

        return this;
    }

    update() {
        if (true === this.state.get('collapsed')) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.position();
        this.$el.addClass('is-active');
    }

    hide() {
        this.$el.removeClass('is-active');
    }
}