var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    //this.collection.on('sync', this.render, this);
    //console.log('collection:',this.collection);
  },
  render: function() {
    console.log(this.$el);
    this.$el.children().detach();
    this.$el.html(this.template());
    //access each video in the collection
    this.collection.forEach(this.renderVideo, this);
     //append el for each video and render

    return this;
  },
  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoView.render().el);
    console.log('el:',this.el);
  },

  template: templateURL('src/templates/videoList.html')

});

//1.render with example data
//2. render with API
//3. searchView