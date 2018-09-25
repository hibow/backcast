var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    //this.videos = new Videos();

    // videotests.fetch().then(function() {
    //   console.log('test');
    //   console.log(videotests.length);
    // });

    this.render();
    //console.log(this.videos.id)
    //console.log(this.videos);
    //console.log('test');
    //console.log(videotests.length);
  },


  render: function() {
    this.$el.html(this.template());
    //render a new videolistview
    console.log(this.videos);
    new VideoListView({el: $('.list'), collection: this.videos}).render();

    return this;
    //render videolist, video listentry, videoplayer view
  },

  template: templateURL('src/templates/app.html')

});
