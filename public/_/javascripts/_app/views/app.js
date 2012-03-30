SCS.Views.App = Backbone.View.extend({

  el : 'body',
  
  events : {},
  
  initialize : function() {
    window.sounds_view = window.sounds_view || new SCS.Views.Sounds();
    window.search_view = window.search_view || new SCS.Views.Search();
  }
  
});