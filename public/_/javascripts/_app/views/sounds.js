SCS.Views.Sounds = Backbone.View.extend({

  el     : '#sounds',
  events : { 
    'click li'     : 'listen',
    'click button' : 'load_more_results'
  },
  
  initialize : function() {
    
    _.bindAll( this, 'open_player', 'load_more_results', 'get_sounds', 'render', 'add_button_more_results', 'update_collection_url' );
    
    this.collection = new SCS.Collections.Sounds();
    this.model      = new SCS.Models.Sounds();
    
    this.model.on( 'change:id'       , this.open_player           );
    this.model.on( 'change:next_href', this.update_collection_url );
    
    this.get_sounds();
  },
  
  render : function( obj_response ) {
    
    var template      = _.template( $( '#tmpl_sounds' ).html(), { data : obj_response } )
      , is_pagination = this.model.get( 'pagination' );
      
    // add html of result in page
    is_pagination ? $( this.el ).append( template ) : $( this.el ).html( template );
    
    if( obj_response.next_href !== undefined ) {
      this.model.set( { next_href : obj_response.next_href } );
    }
    
  },
  
  add_button_more_results : function() {
    $( this.el ).append( '<button>load more results</button>' );
  },
  
  update_collection_url : function() {
    this.collection.url = this.model.get( 'next_href' );
    this.add_button_more_results();
  },
  
  get_sounds : function() {
    
    var self = this;
    
    $( 'header hgroup h2', '#app_content' ).show();
    $( 'button', this.el ).html( 'loading sounds...' );
    
    if( this.collection.url !== '' ) {
      this.collection.fetch({
        success : function( model, response ) {
          self.remove_button_more_results();
          $( 'header hgroup h2', '#app_content' ).hide();
        }
      });
    }
    
  },
  
  remove_button_more_results : function() {
    $( 'button', this.el ).remove();
  },
  
  listen : function( evt ) {
    
    evt.preventDefault();
    
    var el = $( evt.currentTarget );
      
    $( '.active' ).removeClass( 'active' );

    el.addClass( 'active' );
    
    this.model.set( { id : el.data( 'id' ) } );
    
  },
  
  open_player : function() {
    new SCS.Views.Player( { url : this.model.iframe_url() } );
  },
  
  load_more_results : function() {
    this.model.set( { pagination : true } );
    this.get_sounds();
  }
  
});