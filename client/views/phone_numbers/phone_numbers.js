Template.phone_number.onCreated(function() {
  console.log('onCreated');
  Meteor.subscribe("phone_number");
 //  this.data= {};
  this.P_result = new ReactiveVar();
 // this.P_load = new ReactiveVar();
  
  console.log(this);
});
Template.phone_number.helpers({
    tables: function() {
       return phone_numbers.find(); 
    },
    searchData: function (self) {
        console.log('Template---------------');
        console.log(Template.instance().P_result.get());
        return Template.instance().P_result.get();
    },
    admin: function() {
          return Roles.userIsInRole(Meteor.userId(), 'admin');
     }
});
Template.phone_number.events({
     'change #status_select': function(event,template) {
             value  = event.target.value;
             Meteor.call("search_phone_status", value, function(err,res) {
             template.P_result.set(res);
           //  console.log(template.P_result.get());
      });
         
     },
    'keyup input': function(event,template) {
        val = event.target.value;
        Meteor.call("phone_search", val, function(err,res) {
        
        template.P_result.set(res);
          
     });

     }
});
Template.phone_tab.events({
       'click .link': function() {
        var id = this._id;
        console.log(id)
        //console.log(Sites.find({},{_id: id}).fetch()); 
        Router.go('phone_details',{id: id}); //:_id',{_id: id});'
     }
    
});
