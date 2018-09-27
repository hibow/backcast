var SearchView = Backbone.View.extend({
  events: {
    'click button' : function() {
      var searchValue = $('input').val();
      this.collection.search(searchValue);
    },
    'keyup' : function(e) {
      if (e.keyCode === 13) {
        var searchValue = $('input').val();
        this.collection.search(searchValue);
      }
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
