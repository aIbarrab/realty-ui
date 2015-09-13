/*global define*/

define([
    'jquery',
    'backbone',
    'controllers/main',
    'controllers/details'
], function ($, Backbone, MainController, DetailsController) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            ''              : MainController.show,
            'apartment/:id' : DetailsController.show
        }

    });

    return Router;
});
