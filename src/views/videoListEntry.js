var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
   // var video = new Video({model: video});
    //this.videolistview = new VideoListView();
    //this.render();
},

  render: function(video) {
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
