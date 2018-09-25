var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    //unable to call render in videoplayerview when video is selected
    this.listenTo( this.collection,'select', this.render);

  },

  render: function() {
    console.log('model:',this.model);
    console.log('video:',this.video);
   // console.log('collection:',this.collection);
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
