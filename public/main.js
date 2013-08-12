require.config({
  locale : "en_ca",
  // default plugin settings, listing here just as a reference
  hbs : {
    templateExtension : 'js',
    // if disableI18n is `true` it won't load locales and the i18n helper
    // won't work as well.
    i18nDirectory : 'lib/hbs/i18n/',
    disableI18n : false
  },

    pragmasOnSave: {
        excludeHbsParser : true,
        excludeHbs: true,
        excludeAfterBuild: true
    },

  paths  : {
    'jquery': 'lib/jquery', 
    'backbone': 'lib/backbone',
    'require' : 'lib/require',
    'hbs' : 'lib/hbs',
    'Handlebars' : 'lib/Handlebars',
    'underscore' : 'lib/underscore',
    'i18nprecompile' : 'lib/hbs/i18nprecompile',
    'json2' : 'lib/hbs/json2'
  },
  shim : {
    'underscore' : {
      exports : '_'
    },
    'backbone' : {
      deps : ['underscore', 'jquery'],
      exports: 'Backbone'
    }
    ,
    'hbs': {
            deps: ['Handlebars', 'hbs/underscore', 'hbs/i18nprecompile', 'hbs/json2']
        },
  }
});

define(['apps/test/application'], function (App) {
 new App;
 Backbone.history.start();
});