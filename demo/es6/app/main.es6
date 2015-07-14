/**
 * @author Joppe Aarts <joppe@apestaartje.info>
 * @copyright Apestaartje <http://apestaartje.info>
 */

import $ from 'jquery';
import {Search} from 'app/model/Search';
import {Input} from 'app/view/Input';

$(function () {
    let model = new Search();

    window.state = model;

    new Input({
        model: model,
        el: $('#autosuggest'),
        optionsTemplate: _.template($('#options-tpl').html()),
        optionTemplate: _.template($('#option-tpl').html())
    });
});