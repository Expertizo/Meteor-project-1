
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
            }
        ];
     
        sites.forEach(function(site) {
            Sites.insert(site);
        });
    }
    
    
    // Accounts.createUser({
    //     role: "admin",
    //     email: "admin@admin.com",
    //     user_name: "admin",
    //     password: "admin",
        
    // });
 
});
   