
// server/seed.js
Meteor.startup(function() {
    
    if (Sites.find().count() < 1) {
        var sites = [
            
                {
                    address: 'Saddar Karachi',
                    main_phone_number: '3222228510',
                    fax_number: '18818548',
                    answering_server_number:'4481',
                    owner:'Ahmed Raza Qadri',
                    reseller: 'Negview',
                    management: 'BlueStar',
                    manager_name: 'Kashif',
                    manager_phone_number: '486451648(cell)',
                    daylight_saving_time: 'yes',
                    time_zone: 'Central',
                    office_hours: '08:00 17:00',
                    internet_provider: 'Comcast',
                    I_account_numner: '545456854',
                    I_password: '123',
                    I_phone_number: '018485485',
                    I_public_ip_address: '47.548.485.42',
                    IT_service_provider: 'Absam',
                    IT_phone_number: '03484818484'
                },
                {
                    address: 'Bahadurabad Karachi',
                    main_phone_number: '32257489',
                    fax_number: '18818548',
                    answering_server_number:'4481',
                    owner:'Kashif Sulaiman',
                    reseller: 'Negview',
                    management: 'BlueStar',
                    manager_name: 'Kashif',
                    manager_phone_number: '486451648(cell)',
                    daylight_saving_time: 'yes',
                    time_zone: 'Central',
                    office_hours: '12:00 17:30',
                    internet_provider: 'Comcast',
                    I_account_numner: '545456854',
                    I_password: '123',
                    I_phone_number: '018485485',
                    I_public_ip_address: '47.548.485.42',
                    IT_service_provider: 'Absam',
                    IT_phone_number: '03484818484'
                },
                {
                    address: 'Pathankot India',
                    main_phone_number: '420118541',
                    fax_number: '18818548',
                    answering_server_number:'4481',
                    owner:'Love Shine',
                    reseller: 'Negview',
                    management: 'BlueStar',
                    manager_name: 'Kashif',
                    manager_phone_number: '486451648(cell)',
                    daylight_saving_time: 'yes',
                    time_zone: 'Central',
                    office_hours: '10:00 15:00',
                    internet_provider: 'Comcast',
                    I_account_numner: '545456854',
                    I_password: '123',
                    I_phone_number: '018485485',
                    I_public_ip_address: '47.548.485.42',
                    IT_service_provider: 'Absam',
                    IT_phone_number: '03484818484'
                }
            
        ];
     
        sites.forEach(function(site) {
            Sites.insert(site);
        });
    }
    
    
   if(!Meteor.users.findOne({roles: "admin"})){
   
       Accounts.createUser({
        role: "admin",
        email: "admin@admin.com",
        user_name: "admin",
        password: "admin",
        
    });
        Roles.addUsersToRoles(Meteor.users.findOne({email: Accounts.email}),'admin');
    }
  

});
  Meteor.publish("sites", function (lmt) {
      return Sites.find({},{limit: lmt});
  });
  Meteor.publish("phone_number", function () {
      return phone_numbers.find();
  });
  Meteor.publish("AdminLogin", function () {
      return Sites.findOne({'emails.address': "admin@admin.com"});
  });   
  Meteor.publish('SelectedItem', function (id) {
//Make sure you check your inputs you dont want someone sending in an object like { $ne : '' } and publishing everything
	return Sites.findOne({_id : id });
});
//   Meteor.publish("sites", function (name) {
//       return Sites.find({account_name: name});
//   })
Meteor.methods({
    //search methods for sites search
    'search': function(val) {
       // console.log(Sites.find({ account_name: {$regex: /Kashif/}}    ).fetch());
       //  return Sites.find({ account_name: {$regex: val,$options: '-i'}}).fetch();
        return Sites.find({
            $or: [
                {address: {$regex: val,$options: '-i'}},
                {main_phone_number: {$regex: val,$options: '-i'}},
                {fax_number: {$regex: val,$options: '-i'}},
                {answering_server_number: {$regex: val,$options: '-i'}},
                {owner: {$regex: val,$options: '-i'}},
                {reseller: {$regex: val,$options: '-i'}},
                {management: {$regex: val,$options: '-i'}},
                {manager_name: {$regex: val,$options: '-i'}},
                {manager_phone_number: {$regex: val,$options: '-i'}},
                {daylight_saving_time: {$regex: val,$options: '-i'}},
                {time_zone: {$regex: val,$options: '-i'}},
                {office_hours: {$regex: val,$options: '-i'}},
                {fax_number: {$regex: val,$options: '-i'}},
                {internet_provider: {$regex: val,$options: '-i'}},
                {I_account_numner: {$regex: val,$options: '-i'}},
                {I_password: {$regex: val,$options: '-i'}},
                {I_phone_number: {$regex: val,$options: '-i'}},
                {I_public_ip_address: {$regex: val,$options: '-i'}},
                {IT_service_provider: {$regex: val,$options: '-i'}},
                {IT_phone_number: {$regex: val,$options: '-i'}}
                
            ]
        }).fetch();
        
    },
    'phone_search': function(val) {
       // console.log(Sites.find({ account_name: {$regex: /Kashif/}}    ).fetch());
       //  return Sites.find({ account_name: {$regex: val,$options: '-i'}}).fetch();
        return phone_numbers.find({
            $or: [
                // {site: {$regex: val,$options: '-i'}},
                // {status: {$regex: val,$options: '-i'}}
                {phone_number: {$regex: val,$options: '-i'}},
                {site: {$regex: val,$options: '-i'}},
                {status: {$regex: val,$options: '-i'}},
                {use: {$regex: val,$options: '-i'}},
                {primary_server: {$regex: val,$options: '-i'}},
                {carrier: {$regex: val,$options: '-i'}},
                {e911: {$regex: val,$options: '-i'}},
                {comment: {$regex: val,$options: '-i'}},
                {secondary_server: {$regex: val,$options: '-i'}},
                {advanta_number: {$regex: val,$options: '-i'}},
                {forward_number: {$regex: val,$options: '-i'}}
                
            ]
        }).fetch();
        
    },
    'search_status': function(val) {
        //console.log(Sites.find({ account_name: {$regex: /Kashif/}}    ).fetch());
         return Sites.find({office_hours: {$regex: val,$options: '-i'}}).fetch();
      // console.log(Sites.find({account_status: val}).fetch());
      //  return Sites.find({office_hours: val}).fetch();
        
    },
    'search_phone_status': function(val) {
        //console.log(Sites.find({ account_name: {$regex: /Kashif/}}    ).fetch());
         return phone_numbers.find({status:val}).fetch();
      // console.log(Sites.find({account_status: val}).fetch());
      //  return Sites.find({office_hours: val}).fetch();
        
    },
    
    'count': function(clientCount){
        var serverCount = Sites.find().count(); //23
        console.log("Client....");
        console.log(clientCount);
        console.log("Server....");
         console.log(serverCount);
         
            if(clientCount == serverCount){
                console.log("comparing....");
                return true;
            }else{
                return false;
           }
    },
    'admin_login_e': function(email){
     //   console.log(Meteor.users.find({'emails.address': email, roles: 'admin'}));
        // if(Authurized==true){
        //     alert("Wellome To Admin");
        // }else{
        //     alert("Clients are not allowed here");
        // }
//       return Meteor.users.find({},{email: email,password: pass,roles: 'admin'});
      // var query = Meteor.users.findOne({'emails.address':email});
    //    if(query){
    //      var A_email = query.emails[0].address;
    //      var A_pass = query.services.password.bcrypt;
      
    // console.log("==================================================");
    //     console.log(Meteor.users.find({'emails.address': email, roles: 'admin'})).fetch();

    // return Meteor.users.find({'emails.address': email, roles: 'admin'});
      
     return Meteor.users.findOne({'emails.address': email, roles: 'admin'});
        
    }
});











