SCS.Models.Sounds = Backbone.Model.extend({
  
  defaults : {
    pagination : false
  },
  
  iframe_url : function() {
    return 'http://w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/'+ this.id +'&amp;show_artwork=true&amp;auto_play=true';
  }
  
});