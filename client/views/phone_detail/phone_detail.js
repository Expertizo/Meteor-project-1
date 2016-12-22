Template.phone_details.onCreated(function() {
  console.log('onCreated');
   Meteor.subscribe("phone_number");
 //  this.data= {};
 // this.result = new ReactiveVar();
 // this.load = new ReactiveVar();
  
  console.log(this);
});
Template.phone_details.helpers({
      show: function () {
      var url = Iron.Location.get().path;
      var id = url.slice(15,32);
      console.log("url === Id");
      console.log(id);
      return phone_numbers.find({_id: id}).fetch();    
}
});