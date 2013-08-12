require.config({
	locale : "en_ca",
  // default plugin settings, listing here just as a reference
  hbs : {
    templateExtension : 'js',
    // if disableI18n is `true` it won't load locales and the i18n helper
    // won't work as well.
    i18nDirectory : '../lib/hbs/i18n/',
    disableI18n : false
  },



    pragmasOnSave: {
        //removes Handlebars.Parser code (used to compile template strings) set
        //it to `false` if you need to parse template strings even after build
        excludeHbsParser : true,
        // kills the entire plugin set once it's built.
        excludeHbs: false,
        // removes i18n precompiler, handlebars and json2
        excludeAfterBuild: true
    },

  // I change the path as to not duplicate the hbs.js and handlebars plugin.
  // Normally, just drop it in the same place as require.js and it'll work fine.
  // Essentially just ignore this.
  paths  : {
  	'jquery': '../lib/jquery', 
  	'backbone': '../lib/backbone',
  	'require' : '../lib/require',
    'hbs' : '../lib/hbs',
    'Handlebars' : '../lib/Handlebars',
    'underscore' : '../lib/underscore',
    'i18nprecompile' : '../lib/hbs/i18nprecompile',
    'json2' : '../lib/hbs/json2'
  },
  shim : {
  	'underscore' : {
  		exports : '_'
  	},
  	'backbone' : {
  		deps : ['underscore', 'jquery'],
  		exports: 'Backbone'
  	},
  	'hbs': {
            deps: ['Handlebars']
        },
  }
});

define(['test/application'], function (App) {
	new App;
	Backbone.history.start();
});