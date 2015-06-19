import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
        var newQuestion = this.store.createRecord('question', {
          question: this.get('question'),
          author: this.get('author'),
          description: this.get('description')
        });
        newQuestion.save();
        this.get('model').destroyRecord();
        this.set('isEditing', false);
        this.transitionToRoute('questions');
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
