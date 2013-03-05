require.config({
  appDir: "../",
  baseUrl: "scripts/",
  paths: {
    jquery: 'empty:',
    tmpload: 'jquery.tmpload-v3.0',
    underscore: 'underscore-min',
    backbone: 'backbone'
  },
  shim: {
    underscore: {
      exports: "_"
    },

    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    tmpload:{
      deps: ['jquery'],
      exports: 'tmpload'
    }
  }
});

require(
[
 "jquery",
 "underscore",
 "backbone",
 "appclient"
], function($, _, BackBone, appclient) {
    appclient.initialize();
});
