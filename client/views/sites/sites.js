var lmt = 5;
Template.sites.onRendered(function() {
  console.log('onRendered');
  Meteor.subscribe("sites",lmt);
});

Template.sites.helpers({
    tables: function () {
        return Sites.find();
    }
});

Template.sites.events({
    'click #load': function () {
        lmt += 5;
        console.log(lmt);
        return Meteor.subscribe("sites",lmt); 

    },
    'click btn_search': function (event) {
        var value = event.target.search_field.value;
        console.log(value);
        return Meteor.subscribe("sites", value);
    }
});