/*global define*/

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

define(
    [
        'backbone'
    ],
    function (
        Backbone
    ) {
        'use strict';

        var Option;

        Option = Backbone.View.extend({
            tagName: 'li',

            className: 'option-list__item',

            events: {
                'click': 'onClick'
            },

            initialize: function (options) {
                this.state = options.state;
                this.template = options.template;

                this.listenTo(this.model, 'destroy', this.remove);
                this.listenTo(this.state, 'change:selectedOption', this.update);
            },

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));

                return this;
            },

            onClick: function () {
                this.state.set('selectedOption', this.model);
            },

            update: function () {
                if (this.state.get('selectedOption') === this.model) {
                    this.$el.addClass('is-selected');
                } else {
                    this.$el.removeClass('is-selected');
                }
            }
        });

        return Option;
    }
);
