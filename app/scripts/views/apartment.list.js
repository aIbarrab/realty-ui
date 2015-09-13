/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ApartmentsView = Backbone.View.extend({
        template: JST['app/scripts/templates/apartment.list.ejs'],

        tagName: 'div',

        className: 'row',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var that = this;

            that.collection.fetch({
                success : function(){
                    that.$el.html(that.template({
                        collection : that.collection.toJSON()
                    }));
                }
            });

            return that;
        }
    });

    return ApartmentsView;
});
