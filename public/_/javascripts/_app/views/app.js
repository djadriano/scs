SCS.Views.App = Backbone.View.extend({

  el        : 'body',
  loading   : $( 'header hgroup h2', '#app_content' ),
  title_app : $( 'header hgroup h1', '#app_content' ),
  
  events : {
    'app:hide_loading' : 'hide_loading',
    'app:show_loading' : 'show_loading'
  },
  
  initialize : function() {
    window.sounds_view = window.sounds_view || new SCS.Views.Sounds();
    window.search_view = window.search_view || new SCS.Views.Search();
  },
  
  hide_loading : function() {
    this.loading.fadeOut();
  },
  
  show_loading : function() {
    this.loading.fadeIn();
  },
  
  set_title : function( param ) {
    this.title_app.html( param );
  }
  
});