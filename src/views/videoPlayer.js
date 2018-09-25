var VideoPlayerView = Backbone.View.extend({
 
  initialize: function() {
  //  this.model.on('select',this.render,this);
  //this.collection.on('select',this.selected,this);
  this.listenTo(this.collection, 'select', this.selected);
    //this.render();
   },
  selected: function(item) {
    this.model = item;
    this.render();
  },
  events: {'select .embed-responsive-item': 'handleClick'},

  handleClick: function() {
    this.model.render();
  },
  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait.www..</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
