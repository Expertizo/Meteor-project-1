Sites = new Mongo.Collection('sites1');

Sites.attachSchema(new SimpleSchema({
    parent_company: {
        type: String,
        label: "Parent Company"
    },
    account_name: {
        type: String,
        label: "Account Name"
    },
    account_status: {
        type: String,
        label: "Account Status"
    },
    location_name: {
        type: String,
        label: "Location name"
    },
    account_type: {
        type: String,
        label: "Account type"
    },
    type: {
        type: String,
        label: "Type"
    },
    address: {
        type: String,
        label: "Address"
    },
    office_hours: {
        type: String,
        label: "Office hours"
    },
    monthly_service_review: {
        type: Number,
        label: "Monthly Service review"
    },
    monthly_service_revenue: {
        type: Number,
        label: "Monthly Rental revenue"
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