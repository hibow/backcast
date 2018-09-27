var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);

    return this;
  },
  renderVideo: function(video) {
    var videoView = new VideoListEntryView({ model: video });
    this.$('.video-list').append(videoView.render().el);
  },

  template: templateURL('src/templates/videoList.html')

});
