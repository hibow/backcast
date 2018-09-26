var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    //unable to call render in videoplayerview when video is selected
    this.listenTo( this.collection,'select', this.handleSelect);
  },

 handleSelect: function(video) {
   this.model = video;
   this.render();
 },

  render: function() {
   // console.log('model:',this.collection.id);
    this.$el.html(this.template(this.model.attributes));
    //this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
