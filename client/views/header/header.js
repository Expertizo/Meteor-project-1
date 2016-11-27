Template.home.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    },
 
});
Template.header.helpers({
       admin: function() {
        
        if(Meteor.users.findOne({_id: Meteor.userId()})){
            if(Meteor.userId()=="vK7gASLnz29hXATpW"){
            return true;
            }
        }else{
            return false;
        }
           }
});
