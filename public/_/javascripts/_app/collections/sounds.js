SCS.Collections.Sounds = Backbone.Collection.extend({
  model : SCS.Models.Sounds,
  url   : 'http://api.soundcloud.com/tracks.json?client_id=d614588ae977c9792c5211ef5ca27945&linked_partitioning=1&limit=20&offset=0&filter=all'
});