SCS.Models.Search = Backbone.Model.extend({
  
  initialize : function() {
    this.on( 'error', function( model, error ) {
      console.log( error );
    });
  },
  
  validate : function( attrs ) {
    if( attrs.search_field === '' ) {
      return 'search tag null';
    }
  }  
  
});