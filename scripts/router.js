define([
   'jquery',
   'underscore',
   'backbone',
   'tmpload'
],function ($, _, Backbone, tmpload){
    var initialize = function(){
        var AppRouter = Backbone.Router.extend({
            routes:{
            "home/:id": "homePage",
            "*actions":"defaultRoute"
            },
            defaultRoute:function()
            {
                $.tmpload({
                    url: './templates/homepage.html',
                    tplWrapper: _.template,
                    onLoad: function (compiledTpl) {
                        $('#container').html(compiledTpl());
                    }
                });
            },
            homePage: function(){
            }
        });
        var appRouter = new AppRouter();
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
})

