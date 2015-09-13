/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/layout.main',
    'views/apartment.list',
    'collections/apartment'
], function ($, _, Backbone, Layout, Apartments, GetApartments) {
    'use strict';

    var MainController = {
        show : function(){
            var main_column = new Apartments({
                    collection : new GetApartments()
                }),

                layout      = new Layout({
                    left_column : "some text",
                    main_content : main_column.render().el
                });

            layout.render();
        }
    };

    return MainController;
});
