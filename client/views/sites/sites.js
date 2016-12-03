var lmt = 5;
Template.sites.onRendered(function() {
  console.log('onRendered');
  Meteor.subscribe("sites",lmt);
 //  this.data= {};
  this.result = new ReactiveVar();
  console.log(this);
});

Template.sites.helpers({
    tables: function () {
        return Sites.find();
    },
    data: function () {
        console.log("Helper Console");
       console.log(Template.instance());
        // return Template.instance().result.get();
         return false;    
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
        // console.log(val);
        Meteor.call("search",val,function(error,response) {
            // console.log("events");
            // console.log(template);
          //console.log(template.instance());   
         template.result.set(response);
     });
    }
});