Sites = new Mongo.Collection('sites1');

Sites.attachSchema(new SimpleSchema({
    address: {
        type: String,
        label: "Address"
    },
    main_phone_number: {
        type: String,
        label: 'Main Phone Number'
    },
    fax_number: {
        type: String,
        label: "Fax Number"
    },
    answering_server_number: {
        type: String,
        label: "Answering Server Number"
    },
    owner: {
        type: String,
        label: "Owner"
    },
    reseller: {
        type: String,
        label: "Reseller"
    },
    daylight_saving_time: {
        type: String,
        label: "Daylight Saving Time"
    },
    management: {
        type: String,
        label: "Management"
    },
    manager_name: {
        type: String,
        label: "Manager Name"
    },
    manager_phone_number: {
        type: String,
        label: "Manager Name"
    },
    time_zone: {
        type: String,
        label: "Time Zone"
    },
     office_hours: {
        type: String,
        label: "Office Hours"
    },
     internet_provider: {
        type: String,
        label: "Internet Provider"
    },
     I_account_numner: {
        type: String,
        label: "Internet Account Number"
    },
     I_password: {
        type: String,
        label: "Internet Password"
    },
     I_phone_number: {
        type: String,
        label: "Internet Phone Number"
    },
     I_public_ip_address: {
        type: String,
        label: "Internet Public IP Address"
    },
     IT_service_provider: {
        type: String,
        label: "IT Service Provider"
    },
     IT_phone_number: {
        type: String,
        label: "IT Phone Number"
    }
    
}));

//Site and location are the same - from the database schematic.:
//
//Parent Company - look-up in Company table.  If it is not in there, it needs to be added there.
//
//    Account Name is a company name from company table
//
//Account Status - Active, Pending, Inactive
//
//Location name - Key'd in  - like Crescent - Los Angeles
//
//Account type - look-up in Account table - e.g. MDU, End User, Reseller
//
//Type: look-up in Type table - e.g. Office, Retail
//
//Address - normal, State look-up, etc.
//
//    Location Manager Name - look-up in People table - if not there - easy to add.
//
//    Internet Provider - look-up Internet provider table e.g. Comcast, AT&T, Time Warner
//
//Office hours - key'd e.g. Open 9 to 5 M-F
//
//Monthly Service review - in dollars - key'd in.
//
//Monthly Rental revenue - in dollars key'd in.