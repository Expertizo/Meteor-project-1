phoneNumber = new Mongo.Collection('sites1');
phoneNumber.attachSchema(new SimpleSchema({
    created_by: {
        type: String,
        label: "Created By"
    },
    date_added: {
        type: Date,
        label: "Date Added"
    },
    ati_partner: {
        type: String,
        label: "ATI Partner"
    },
    parent_company: {
        type: String,
        label: "Parent Company"
    },
    company_name: {
        type: String,
        label: "Company Name"
    },
    site: {
        type: String,
        label: "Site"
    },
    phone_number_inventory: {
        type: String,
        label: "Phone Number Inventory"
    },
    updated_by: {
        type: String,
        label: "Updated By"
    },
    date_modified: {
        type: Date,
        label: "Date Modified"
    },
    vendor_name: {
        type: String,
        label: "Vendor Name"
    },
    phone_number_comment: {
        type: String,
        label: "Phone Number Comment"
    },
    phone_number_disposition_comment: {
        type: String,
        label: "Phone Number Disposition Comment"
    },
    status: {
        type: String,
        label: "Status"
    },
    sms_active: {
        type: boolean,
        label: "SMS Active"
    },
    primary_server: {
        type: String,
        label: "Primary Server"
    },
    secondary_server: {
        type: String,
        label: "Secondary Server"
    },
    idsite: { // 
        type: Number,
        label: "IdSite"
    },
    idvendors: { //
        type: Number,
        label: "IdVendors"
    },
    e911: { //
        type: boolean,
        label: "E911"
    },
    advanta_number: {
       type: boolean,
       label: "Advanta Number"
    },
    forward_to_number: {
        type: String,
        label: "Forward To Number"
    }
}));