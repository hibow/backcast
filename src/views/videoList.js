var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync',this.render,this);

  },

  render: function() {
   console.log('data:',this.collection);
    //var self = this;
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(function (video) {
      this.$('.video-list').append(
        new VideoListEntryView({ model: video}).render().el);
    });  
    return this;

  },

  template: templateURL('src/templates/videoList.html')

});
