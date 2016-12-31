Template.admin_fview.onCreated(function() {
     Meteor.subscribe("userList");
});

Template.admin_fview.helpers({
    'client': function () {
        return Meteor.users.find({roles: {$ne: "admin"}});
    }
});
Template.clients.events({
    'click .link':function(){
        var id = this._id;
        alert(id);
    }
});