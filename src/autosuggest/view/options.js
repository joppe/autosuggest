/*global define*/

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'autosuggest/view/option'
    ],
    function (
        $,
        _,
        Backbone,
        Option
    ) {
        'use strict';

        var Options;

        Options = Backbone.View.extend({
            tagName: 'ol',

            className: 'option-list',

            initialize: function (options) {
                this.state = options.state;
                this.template = options.template;
                this.optionTemplate = options.optionTemplate;

                this.$el.on('click', function (event) {
                    event.stopPropagation();
                });

                this.listenTo(this.model, 'add', this.addOption);
                this.listenTo(this.model, 'remove', this.removeOption);
                this.listenTo(this.model, 'reset', this.clear);
                this.listenTo(this.state, 'change:collapsed', this.update);
            },

            addOption: function (model) {
                var view = new Option({
                        model: model,
                        state: this.state,
                        template: this.optionTemplate
                    });

                this.$el.append(view.render().$el);
            },

            removeOption: function (model) {
                model.trigger('destroy');
            },

            clear: function (models, options) {
                _.each(options.previousModels, function (model) {
                    model.trigger('destroy');
                });
            },

            render: function () {
                this.update();

                this.$el.html(this.template(this.state.toJSON()));

                return this;
            },

            update: function () {
                if (true === this.state.get('collapsed')) {
                    this.hide();
                } else {
                    this.show();
                }
            },

            show: function () {
                this.$el.addClass('is-active');
            },

            hide: function () {
                this.$el.removeClass('is-active');
            }
        });

        return Options;
    }
);
