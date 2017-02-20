var lmt = 5;
Template.Assets.onCreated(function() {
  console.log('onCreated');
  Meteor.subscribe("assets",lmt);
 //  this.data= {};
  this.result = new ReactiveVar();
  this.load = new ReactiveVar();
  
  console.log(this);
});

Template.Assets.helpers({
    Admin_tables: function () {
        return assets.find();
    },
    Client_table: function(){
        var id = Meteor.userId();
        return Assets.find({haveClient: {site: id}});
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

Template.Assets.events({
    'click #load': function (e,template) {
        lmt += 5;
        var clientTotal = assets.find().count(); //5
        Meteor.call("Assets_count",clientTotal,function(err,response) {
            template.load.set(response);
        });
      
        return Meteor.subscribe("assets",lmt); 
     },
    'keyup input': function(event,template) {
        val = event.target.value;
        Meteor.call("Assets_search", val, function(error,response) {
        template.result.set(response);
            
        });

     }
    //  ,
    //  'change #select': function(event,template) {
    //          value  = event.target.value;
    //          Meteor.call("search_status", value, function(err,res) {
    //          template.result.set(res);
            
    //     });
         
    //  }
});
Template.Assetstab.events({
    'click .link': function() {
        var id = this._id;
        console.log(id)
        //console.log(assets.find({},{_id: id}).fetch()); 
        Router.go('assets_detail',{id: id}); //:_id',{_id: id});'
    },
   
});
