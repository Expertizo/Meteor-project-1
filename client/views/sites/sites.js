var lmt = 5;
Template.sites.onCreated(function() {
  console.log('onCreated');
  Meteor.subscribe("sites",lmt);
 //  this.data= {};
  this.result = new ReactiveVar();
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
}
});

Template.sites.events({
    'click #load': function () {
        lmt += 5;
        console.log(lmt);
        return Meteor.subscribe("sites",lmt); 

    },
    // 'click btn_search': function (event) {
    //     var value = event.target.search_field.value;
    //     console.log(value);
    //     return Meteor.subscribe("sites", value);
    // }
    'keyup input': function(event,template) {
        var val = event.target.value;
        Meteor.call("search", val, function(error,response) {
         template.result.set(response);
     });
    }
});