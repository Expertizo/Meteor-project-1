
// server/seed.js
Meteor.startup(function() {
    
    if (Sites.find().count() < 1) {
        var sites = [
            {
                parent_company: 'Code Pacific',
                account_name: 'Love Behl',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Pathankot, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
            {
                parent_company: 'Code Pacific',
                account_name: 'Mohammad Kashif Sulaiman',
                account_status: 'Active',
                location_name: 'Pakistan',
                account_type: 'MDU',
                type: 'Office',
                address: 'Karachi, Pakistan',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 140,
                monthly_service_revenue: 100
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Ahmed',
                account_status: 'Active',
                location_name: 'Pakistan',
                account_type: 'MDU',
                type: 'Office',
                address: 'karachi, Pakistan',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 160,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Adam',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Mumbai, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 200,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Hussain',
                account_status: 'Active',
                location_name: 'Pakistan',
                account_type: 'MDU',
                type: 'Office',
                address: 'Lahore, Pakistan',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 190,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Qasim',
                account_status: 'Active',
                location_name: 'UAE',
                account_type: 'MDU',
                type: 'Office',
                address: 'Ajman, Uae',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Hardword',
                account_status: 'Active',
                location_name: 'America',
                account_type: 'MDU',
                type: 'Office',
                address: 'Newyork, America',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Nazar Iqbal',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Goa, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 200,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Sukhdeep Singh,',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Gujrat, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 250
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Charly',
                account_status: 'Active',
                location_name: 'Canada',
                account_type: 'MDU',
                type: 'Office',
                address: 'GreenTown, Canada',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 160,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Ramesh',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Dheli, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Iqbal',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Bareli, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Kamran Qadri',
                account_status: 'Active',
                location_name: 'Pakistan',
                account_type: 'MDU',
                type: 'Office',
                address: 'Karachi, Pakistan',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Yaseen',
                account_status: 'Active',
                location_name: 'Pakistan',
                account_type: 'MDU',
                type: 'Office',
                address: 'Islamabad, Pakistan',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'David',
                account_status: 'Active',
                location_name: 'America',
                account_type: 'MDU',
                type: 'Office',
                address: 'Washington, America',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Ameet Kumar',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Mumbai, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Suresh',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Goa, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Akber ud deen',
                account_status: 'Active',
                location_name: 'Bangladesh',
                account_type: 'MDU',
                type: 'Office',
                address: 'Chitakong , Bangladesh',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Nasrullah khan',
                account_status: 'Disable',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Pathankot, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Ahmed Raza',
                account_status: 'Pending',
                location_name: 'Pakistan',
                account_type: 'MDU',
                type: 'Office',
                address: 'Multan, Pakistan',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Huzaifa',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Gujrat, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Sardar',
                account_status: 'Active',
                location_name: 'India',
                account_type: 'MDU',
                type: 'Office',
                address: 'Mumbai, India',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
            },
                {
                parent_company: 'Code Pacific',
                account_name: 'Haider Ali',
                account_status: 'Active',
                location_name: 'Pakistan',
                account_type: 'MDU',
                type: 'Office',
                address: 'Quetta , Pakistan',
                office_hours: '9 AM to 5 PM',
                monthly_service_review: 100,
                monthly_service_revenue: 200
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
  })
//   Meteor.publish("sites", function (name) {
//       return Sites.find({account_name: name});
//   })
Meteor.methods({
    'search': function(val) {
      //  console.log(Sites.find({ account_name: {$regex: /Kashif/}}    ).fetch());
        // return Sites.find({ account_name: {$regex: val,$options: '-i'}}).fetch();
        return Sites.find({
            $or: [
                {parent_company: {$regex: val,$options: '-i'}},
                {account_name: {$regex: val,$options: '-i'}},
                {account_status: {$regex: val,$options: '-i'}},
                {location_name: {$regex: val,$options: '-i'}},
                {account_type: {$regex: val,$options: '-i'}},
                {type: {$regex: val,$options: '-i'}},
                {address: {$regex: val,$options: '-i'}},
                {office_hours: {$regex: val,$options: '-i'}},
                {monthly_service_review: {$regex: val,$options: '-i'}},
                {monthly_service_revenue: {$regex: val,$options: '-i'}}
                
            ]
        }).fetch();
        
    },
    'search_status': function(val) {
      //  console.log(Sites.find({ account_name: {$regex: /Kashif/}}    ).fetch());
        // return Sites.find({ account_name: {$regex: val,$options: '-i'}}).fetch();
        return Sites.find({account_status: val}).fetch();
        
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
    }
});