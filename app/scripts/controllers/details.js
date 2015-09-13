/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/layout.details',
    'views/apartment.details',
    'models/apartment'
], function ($, _, Backbone, Layout, ApartmentDetails, Model) {
    'use strict';

    var DetailsController = {
        show : function(id){
            console.log(id);
            var content = new ApartmentDetails({
                    model  : new Model({id: id})
                }),

                layout = new Layout({
                    main_content : content.render().el
                });

            layout.render();
        }
    };

    return DetailsController;
});
