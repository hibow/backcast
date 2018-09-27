var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.helpfunc);
    this.videos.search('indian food');
    this.render();
  },
  helpfunc: function() {
  //assign the first item
    if (this.videos.length > 0) {
    this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView( { el: $('.list'), collection: this.videos }).render();
    new VideoPlayerView( { el: $('.player'),collection:this.videos, model:this.videos.at(0) }).render();
    new SearchView( { el: $('.search'), collection: this.videos }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
