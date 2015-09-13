/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ApartmentDetailsView = Backbone.View.extend({
        template: JST['app/scripts/templates/apartment.details.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var that = this;
            that.model.fetch({
                success: function(){
                    that.$el.html(that.template({
                        model: that.model
                    }));
                }
            });

            return that;
        }
    });

    return ApartmentDetailsView;
});
