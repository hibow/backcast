var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    //console.log(data);
    this.render();
    new VideoListView({ collection: this.videos, el: '.video-list'});
    new VideoPlayerView({ el: '.video-player'});
    new VideoListEntryView({ el: '.video-list-entry media'});

    //this.videolistview.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
