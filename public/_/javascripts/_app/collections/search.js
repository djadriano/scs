SCS.Collections.Search = Backbone.Collection.extend({
  model : SCS.Models.Search,
  url   : 'http://api.soundcloud.com/tracks.json?client_id=d614588ae977c9792c5211ef5ca27945&linked_partitioning=1'
});