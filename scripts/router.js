define([
   'jquery',
   'underscore',
   'backbone',
   'tmpload'
],function ($, _, Backbone, tmpload){
    var initialize = function(){
        var AppRouter = Backbone.Router.extend({
            routes:{
            "about": "homePage",
            "*actions":"defaultRoute"
            },
            defaultRoute:function()
            {
                this.homePage();
            },
            homePage: function(){
                $.tmpload({
                    url: './templates/homepage.html',
                    tplWrapper: _.template,
                    onLoad: function (compiledTpl) {
                        $('#templateSection').html(compiledTpl());
                    }
                });
            }
        });
        var appRouter = new AppRouter();
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
})

