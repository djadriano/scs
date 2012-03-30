SCS.Views.Player = Backbone.View.extend({
  
  el : '#app_content header iframe',
  
  initialize : function() {
    this.open();
  },
  
  open : function() {
    
    $( this.el ).attr( 'src', this.options.url ).slideDown( 500 );
    
    $( '#list_content' ).animate( { marginTop : 286 }, 500 );
  }
  
});  