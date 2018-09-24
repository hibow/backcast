var Videos = Backbone.Collection.extend({
  //define url from video model?
  url: 'src/data/exampleVideoData.js',
  model: Video,
  //parse data from video model
  parse: function(data) {
    return data.id;
  }
});
