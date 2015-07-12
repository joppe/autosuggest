/*global define*/

/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

define(
    [
        'jquery',
        'backbone',
        'autosuggest/view/options'
    ],
    function (
        $,
        Backbone,
        Options
    ) {
        'use strict';

        var Input;

        Input = Backbone.View.extend({
            initialize: function (options) {
                var $body = $('body'),
                    list = new Options({
                        model: this.model.get('options'),
                        state: this.model,
                        template: options.optionsTemplate,
                        optionTemplate: options.optionTemplate
                    });

                $body.append(list.render().$el);
                $body.on('click', _.bind(function () {
                    this.model.set('collapsed', true);
                }, this));

                this.listenTo(this.model, 'change:keyword', this.onKeywordChange);
                this.listenTo(this.model, 'change:selectedOption', this.onSelectedOptionChange);
            },

            blur: function () {
                this.model.set('collapsed', true);
            },

            focus: function () {
                if (0 < this.model.get('options').length) {
                    this.model.set('collapsed', false);
                }
            },

            getInputValue: function () {
                return this.$el.val();
            },

            setInputValue: function (value) {
                this.$el.val(value);
            },

            setKeyword: function () {
                this.model.set('keyword', this.getInputValue());
            },

            onKeywordChange: function () {
                this.model.update();
            },

            onSelectedOptionChange: function () {
                var value = this.model.get('selectedOption').getLabel();

                this.model.set('keyword', value, {
                    silent: true
                });
                this.model.get('options').reset();
                this.setInputValue(value);
            }
        });

        return Input;
    }
);
