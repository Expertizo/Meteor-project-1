
Template.Owner.onCreated(function() {
    Meteor.subscribe("AdminLogin");    
});

Template.Owner.helpers({
    admin: function () {
        var currentUser = Meteor.userId();
        return Meteor.users.findOne({_id:userId,roles:'admin'});
    }
});
Template.admin_login.events({
    'submit .adminForm': function(event) {
        event.preventDefault();
        var email = event.target.email.value;
        var pass = event.target.pass.value;
        Meteor.call("admin_login_e",email,function(err,res) {
           if(res){
                 Meteor.loginWithPassword(email, pass , function(erorr) {
                     if(erorr){
                     alert(erorr);
                     }else{
                                                   
                     }
                     
                 });
           }else{
            alert("Only admin is allow here for login");    
        } 
        });
        // var query = Meteor.users.findOne({'emails.address':email});
        // if(query){
        // }else{
        //     alert("Only admin is allow here for login");    
        // }
    }
});