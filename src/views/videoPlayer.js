var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    //this.videolistview = new VideoListView();
    this.render();
},

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
