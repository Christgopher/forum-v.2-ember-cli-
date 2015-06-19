import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var description = this.get('description');
      var author = this.get('author');
      var question = this.get('question');

      var question_id = this.get('model.id');

      this.store.find('question', question_id).then(function (newQuestion) {
        newQuestion.get('author');
        newQuestion.set('author', author);
        newQuestion.get('description');
        newQuestion.set('description', description);
        newQuestion.get('question');
        newQuestion.set('question', question);

        newQuestion.save();
    });


      this.set('isEditing', false);
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
