var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //render a new videolistview
    console.log(this.videos);
    new VideoListView({el: $('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: $('.player'),collection:this.videos, model:this.videos.at(0) }).render();
    return this;
    //render videolist, video listentry, videoplayer view
  },

  template: templateURL('src/templates/app.html')

});
