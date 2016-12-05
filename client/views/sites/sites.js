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
    tables: function () {
        return Sites.find();
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