var SearchView = Backbone.View.extend({
  initialize: function() {
  this.collection.search();
  this.listenTo(this.collection, 'sync', this.selected);
  },
  selected: function() {
    this.model = this.collection.at(0);
    this.model.select();
  },
  events: {
    'click .btn' : 'handleSearch',
    'keyup input': 'handleKeyUp'
  },
  handleSearch: function() {
    var query = this.$('input').val().trim();
    if (query) {
      this.collection.search(query);
    }
    this.$('input').val('');
  },
  handleKeyUp: function(event) {
    if (event.keyCode ===13 ) {
      this.handleSearch();
    }
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
