Template.admin_fview.onCreated(function() {
      ids = [];
     Meteor.subscribe("userList");
     Meteor.subscribe("AllSites");
});

Template.admin_fview.helpers({
    client: function () {
        return Meteor.users.find({roles: {$ne: "admin"}});
    },
    site: function(){
        return Sites.find();
    },
    site_to_client: function(){
        return Meteor.users.findOne({_id: C_id});
    }
});
Template.sit.events({
    'click .link': function(){
         S_id = this._id;
         ids[0] = S_id;
         console.log("========== Site id");
         console.log(S_id);
         swal({
            title: "Site Selected!",
            text: "Site is ready to Assign",
            timer: 1500,
            showConfirmButton: false
        });
    }
});
Template.clients.events({
    'click .link':function(){
        C_id = this._id;
        ids[1] = C_id;
        
        console.log("========== Client id");
        console.log(C_id);
        //alert(C_id);
        if(!ids[0]==""){
        Meteor.call("AssignSite",ids[0],{'site':ids[1]},function(err,res){
            if(err){
                  ids[0]="";
                  ids[1]="";
                sweetAlert("Some Error Accured", "Error Accured!", "error"); 
            }else{
                  ids[0]="";
                  ids[1]="";
                swal("Good job!", "Site successfully assigned!", "success")
            }
        });
        }else{
            //alert("Please First Select Site for assigning to client");
            sweetAlert("Site not Selected", "Please First Select Site for assigning to client!", "error");   
     }
    }
});
