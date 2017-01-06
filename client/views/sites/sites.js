var lmt = 5;
Template.sites.onCreated(function() {
  console.log('onCreated');
  Meteor.subscribe("sites",lmt);
 //  this.data= {};
  this.result = new ReactiveVar();
  this.load = new ReactiveVar();
  
  console.log(this);
});

Template.sites.helpers({
    Admin_tables: function () {
        return Sites.find();
    },
    Client_table: function(){
        var id = Meteor.userId();
        return Sites.find({haveClient: {site: id}});
    },
    searchData: function (self) {
        console.log('Template---------------');
        console.log(Template.instance().result.get());
        return Template.instance().result.get();
    },
    loadBtn: function () {
        
        console.log("load helpers");
        console.log(Template.instance().load.get());
        return Template.instance().load.get();
             
    },
    admin: function() {
          return Roles.userIsInRole(Meteor.userId(), 'admin');
     }
    
});

Template.sites.events({
    'click #load': function (e,template) {
        lmt += 5;
        var clientTotal = Sites.find().count(); //5
        Meteor.call("count",clientTotal,function(err,response) {
            template.load.set(response);
        });
      
        return Meteor.subscribe("sites",lmt); 
     },
    'keyup input': function(event,template) {
        val = event.target.value;
       Meteor.call("search", val, function(error,response) {
        template.result.set(response);
            
        });

     },
     'change #select': function(event,template) {
             value  = event.target.value;
             Meteor.call("search_status", value, function(err,res) {
             template.result.set(res);
            
        });
         
     }
});
Template.tab.events({
    'click .link': function() {
        var id = this._id;
        console.log(id)
        //console.log(Sites.find({},{_id: id}).fetch()); 
        Router.go('detail',{id: id}); //:_id',{_id: id});'
    },
   
});
