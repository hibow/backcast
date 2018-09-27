var Videos = Backbone.Collection.extend({
  //define url from video model?
  url: 'https://www.googleapis.com/youtube/v3/search',
  model: Video,

  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    });
  },
  //parse data from video model
  parse: function(data) {
    return data.items;
  }
});
