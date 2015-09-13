/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LayoutDetailsView = Backbone.View.extend({
        template: JST['app/scripts/templates/layout.details.ejs'],

        el: "#container",

        events: {},

        initialize: function (options) {
            //this.listenTo(this.model, 'change', this.render);
            this.options = options;
        },

        render: function () {
            this.$el.html(this.template());
            this.$("#main-content").html(this.options.main_content);

            return this;
        }
    });

    return LayoutDetailsView;
});
