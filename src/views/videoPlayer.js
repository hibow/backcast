var VideoPlayerView = Backbone.View.extend({
 
  initialize: function() {
  //  this.model.on('select',this.render,this);
   // this.collection.on('select',this.selection,this);
  // this.listenTo(this.collection, 'select', this.render);
    //this.render();
   },

  render: function() {
    if (this.template()) {
      this.$el.html(this.template());
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
