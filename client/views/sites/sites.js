Template.sites.onRendered(function() {
  console.log('onRendered');
  Meteor.subscribe("sites");
});

Template.sites.helpers({
    tables: function () {
        return Sites.find();
    }
});