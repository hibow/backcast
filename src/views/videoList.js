var VideoListView = Backbone.View.extend({
  initialize: function() {
      //this.videolistview = new VideoListView();
      this.render();
      this.videolistentryview = new VideoListEntryView({ el: '.video-list-entry media'});
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
  //  this.collection.forEach(this.videolistentryview.render, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
