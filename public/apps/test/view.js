define(['backbone', 'hbs!test/templates/condition'], function(Backbone, template) {
	return Backbone.View.extend({
		events : {
			"click .btn-save" : "save"
		},
		save : function(){
			alert('save');
			this.model.save();
			return false;
		},
		initialize : function(){
			this.model.fetch();
		},
		render : function(){		 
	        var templateHTML = template(this.model.toJSON());
			this.$el.html(templateHTML);
			return this;
		}
})
})