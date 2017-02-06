Template.details.onCreated(function(){
  Meteor.subscribe("AllSites");
});
Template.details.helpers({
    show: function () {
      var url = Iron.Location.get().path;
       id = url.slice(8,26);
      console.log("url === Id");
      console.log(id);
      return Sites.find({_id: id}).fetch();    
}
});
Template.details.events({
    'click .btnContact': function(){
        var users = Sites.findOne({_id: id});
        var ids = users.havaClient;
        alert("btnContact"+users);

     }
    
});