Template.assets_detail.onCreated(function(){
  Meteor.subscribe("AllAssets");
});
Template.assets_detail.helpers({
    show: function () {
      var url = Iron.Location.get().path;
       id = url.slice(15,37);
      console.log("url === Id");
      console.log(id);
      return assets.find({_id: id}).fetch();    
}
});
Template.assets_detail.events({
    'click .btnContact': function(){
        var users = assets.findOne({_id: id});
        var ids = users.havaClient;
        alert("btnContact"+users);  

     }
    
});