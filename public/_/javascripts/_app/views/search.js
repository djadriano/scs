SCS.Views.Search = Backbone.View.extend({

  el            : '#form_search',
  title_content : $( 'header hgroup', '#app_content' ),
  events        : {
    'submit' : 'search'
  },
  
  initialize : function() {
    
    _.bindAll( this, 'search', 'get_sounds' );
    
    this.model      = new SCS.Models.Search();
    this.collection = new SCS.Collections.Search();
    
    this.model.on( 'change:search_field', this.get_sounds );
    
  },
  
  search : function( evt ) {
    evt.preventDefault();
    this.model.set( { search_field : $( 'input', this.el ).val() } );
  },
  
  get_sounds : function() {
    
    var self = this;
    
    $( 'h2', self.title_content ).show();
    
    this.collection.fetch({
      data    : { q : self.model.get( 'search_field' ) },
      success : function( model, response ) {
        
        console.log(response.collection.length);
        
        $( 'h1', self.title_content ).html( 'Search results for ' + self.model.get( 'search_field' ) );
        $( 'h2', self.title_content ).hide();
        sounds_view.model.set( { pagination : false } );
        sounds_view.render( response );
        
      },
      
      error : function(model, response) {
        console.log('a');
      }
    });
    
  }
  
});