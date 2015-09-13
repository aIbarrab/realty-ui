/*global define*/

define([
    'underscore',
    'backbone',
    'models/apartment'
], function (_, Backbone, ApartmentsModel) {
    'use strict';

    var ApartmentCollection = Backbone.Collection.extend({
        model: ApartmentsModel,
        url: "http://localhost:3000/apartments"
    });

    return ApartmentCollection;
});
