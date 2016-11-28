Template.home.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    },
 
});
Template.header.helpers({
       admin: function() {
          return Roles.userIsInRole(Meteor.userId(), 'admin');
       }
});
