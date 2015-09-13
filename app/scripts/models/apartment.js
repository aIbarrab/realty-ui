/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ApartmentModel = Backbone.Model.extend({
        endPoint: "http://localhost:3000/apartments",

        url: function(){
            return this.endPoint + '/' + this.id;
        },

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return ApartmentModel;
});
