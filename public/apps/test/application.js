define(['backbone', 'test/view', 'test/models'], function(Backbone, View, Model){
	return Backbone.Router.extend({
	 	routes: {
	    	"/slug/": "slug"   
	  	},
	  	slug: function() {
	  		var view = new View({ model : new Model()});
	  		view.render();
	  		$('.container').empty().append(view.el);
	  	}
	});
})