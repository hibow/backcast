var VideoListEntryView = Backbone.View.extend({
  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  handleClick: function() {
    this.model.select();
  },

  initialize: function() {
    
   // var video = new Video({model: video});
   //view = new VideoListEntryView({ model: model });
    //this.videolistview = new VideoListView();
  //this.render();
  //add select event?
},

  render: function() {
   console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
