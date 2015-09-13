/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LayoutMainView = Backbone.View.extend({
        template: JST['app/scripts/templates/layout.main.ejs'],

        el: "#container",

        events: {},

        initialize: function (options) {
            //this.listenTo(this.model, 'change', this.render);
            this.options = options;
        },

        render: function () {
            this.$el.html(this.template());
            this.$("#left_column").html(this.options.left_column);
            this.$("#main_content").html(this.options.main_content);

            return this;
        }
    });

    return LayoutMainView;
});
