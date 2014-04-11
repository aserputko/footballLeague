/*global define*/
define(function (require) {
    'use strict';

    var StaticPagesController,
        Backbone = require('backbone'),
        HomeView = require('views/static-page/home'),
        HelpView = require('views/static-page/help');

    StaticPagesController = function () {};

    StaticPagesController.prototype = {

        home: function () {
            this.view = new HomeView();
        },

        help: function () {
            this.view = new HelpView();
        }

    }


});