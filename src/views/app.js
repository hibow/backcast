var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    var videotests = new Videos();
    //this.videos = new Videos();
    videotests.fetch().then(function() {
      console.log('test');
      console.log(videotests.length);
    });

    this.render();
    //console.log(this.videos.id)
    //console.log(this.videos);
    //console.log('test');
    //console.log(videotests.length);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
    //render videolist, video listentry, videoplayer view
  },

  template: templateURL('src/templates/app.html')

});
