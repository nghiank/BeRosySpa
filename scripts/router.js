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
            "services": "servicePage",
            "product": "productPage",
            "therapies": "therapiesPage",
            "promotion": "promotionPage",
            "career": "careerPage",
            "contact": "contactPage",
            "*actions":"defaultRoute"
            },
            defaultRoute:function()
            {
              this.getPage('./templates/homepage.html',function(){
                $(function(){
                  createStoryJS({
                    type:       'timeline',
                    width:      '100%',
                    height:     '100%',
                    source: 'datatimeline/abouttimeline.jsonp',
                    embed_id:   'timeline'
                  });
                })
              });
            },
            homePage: function()
            {
              this.defaultRoute();
            },
            servicePage: function()
            {
              this.getPage('./templates/servicePage.html');
            },
            productPage: function()
            {
              this.getPage('./templates/productPage.html');
            },
            therapiesPage: function()
            {
              this.getPage('./templates/therapiesPage.html');
            },
            promotionPage: function()
            {
              this.getPage('./templates/promotionPage.html');
            },
            careerPage: function()
            {
              this.getPage('./templates/careerPage.html');
            },
            contactPage: function()
            {
              this.getPage('./templates/contactPage.html');
            },
            getPage: function(path, callback){
              $.tmpload({
                url: path,
                tplWrapper: _.template,
                onLoad: function (compiledTpl) {
                  $('#templateSection').html(compiledTpl());
                  if (typeof(callback) === "function")
                  {
                      callback();
                  }
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

