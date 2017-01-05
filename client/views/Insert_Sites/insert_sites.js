Template.insertSite.helpers({
       admin: function() {
          return Roles.userIsInRole(Meteor.userId(), 'admin');
       }
});
Template.insertSite.events({
    
   'submit form': function(event) {
        event.preventDefault();
        var Owner = event.target.txtOwner.value;
        var address = event.target.txtAddress.value;
        var Main_Phone_Number = event.target.txtMainPhoneNumber.value;
        var Fax_Number = event.target.txtFaxNumber.value;
        var Answing_Server_Number = event.target.txtAnsweringServerNumber.value;
        var Management = event.target.txtManagement.value;
        var Reseller = event.target.txtReseller.value;
        var Manager_Name = event.target.txtManagerName.value;
        var Manager_Phone_Number = event.target.txtManagerPhoneNumber.value;
        var Time_Zone = event.target.txtTimeZone.value;
        var Internet_Provider = event.target.txtInternetProvider.value;
        var Internet_Account_Number = event.target.txtInternetAccountNumber.value;
        var Internet_Password = event.target.txtInternetPassword.value;
        var Internet_Phone_Number = event.target.txtInternetPhoneNumber.value;
        var Internet_Public_IP_Address = event.target.txtPublicIPAddress.value;
        var IT_Service_Provider = event.target.txtITServiceProvider.value;
        var IT_Phone_Number = event.target.txtITPhoneNumber.value;
        var DLS = event.target.select_DLS.value;
        var Office_Hour = event.target.select_OH.value;
        
        console.log(Owner);
        console.log(address);
        console.log(Main_Phone_Number);
        console.log(Fax_Number);
        console.log(Answing_Server_Number);
        console.log(Management );
        console.log(Reseller);
        console.log(Manager_Name );
        console.log(Manager_Phone_Number);
        console.log(Time_Zone);
        console.log(Internet_Provider);
        console.log(Internet_Account_Number);
        console.log(Internet_Password);
        console.log(Internet_Phone_Number);
        console.log(Internet_Public_IP_Address);
        console.log(IT_Service_Provider);
        console.log(IT_Phone_Number);
        console.log(DLS);
        console.log(Office_Hour);
        
        Sites.insert({
                    address: address,
                    main_phone_number: Main_Phone_Number,
                    fax_number: Fax_Number,
                    answering_server_number:Answing_Server_Number,
                    owner:Owner,
                    reseller: Reseller,
                    management: Management,
                    manager_name: Manager_Name,
                    manager_phone_number: Manager_Phone_Number,
                    daylight_saving_time: DLS,
                    time_zone: Time_Zone,
                    office_hours: Office_Hour,
                    internet_provider: Internet_Provider,
                    I_account_numner: Internet_Account_Number,
                    I_password: Internet_Password,
                    I_phone_number: Internet_Phone_Number,
                    I_public_ip_address: Internet_Public_IP_Address,
                    IT_service_provider: IT_Service_Provider,
                    IT_phone_number: IT_Phone_Number,
                    haveClient:[]
                    
        },function (err) {
            if(err){
                alert("Not data Inserted");
            }else{
                alert("data Inserted");
                Router.go('sites');
            }    
        });
        
    }
    
});