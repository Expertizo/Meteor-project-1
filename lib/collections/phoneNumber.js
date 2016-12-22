PhoneNumber = new Mongo.Collection('phoneNumber');
PhoneNumber.attachSchema(new SimpleSchema({
 
    phone_number: {
        type: String,
        label: "Phone Number"
    },
    status: {
        type: String,
        label: "Status"
    },
    use: {
        type: String,
        label: "Use"
    },
    site: {
        type: String,
        label: "Site"
    },
    primary_server: {
        type: String,
        label: "Primary Server"
    },
    carrier: {
        type: String,
        label: "Carrier"
    },
    e911: {
        type: String,
        label: "E911"
    },
    comment: {
        type: String,
        label: "Comment"
    },
    secondary_numer: {
        type: String,
        label: "Secondary Number"
    },
    advanta_number: {
        type: String,
        label: "Advanta Number"
    },
    forward_number: {
        type: String,
        label: "Forward Number"
    }
     
 
    // created_by: {
    //     type: String,
    //     label: "Created By"
    // },
    // date_added: {
    //     type: Date,
    //     label: "Date Added"
    // },
    // ati_partner: {
    //     type: String,
    //     label: "ATI Partner"
    // },
    // parent_company: {
    //     type: String,
    //     label: "Parent Company"
    // },
    // company_name: {
    //     type: String,
    //     label: "Company Name"
    // },
    // site: {
    //     type: String,
    //     label: "Site"
    // },
    // phone_number_inventory: {
    //     type: String,
    //     label: "Phone Number Inventory"
    // },
    // updated_by: {
    //     type: String,
    //     label: "Updated By"
    // },
    // date_modified: {
    //     type: Date,
    //     label: "Date Modified"
    // },
    // vendor_name: {
    //     type: String,
    //     label: "Vendor Name"
    // },
    // phone_number_comment: {
    //     type: String,
    //     label: "Phone Number Comment"
    // },
    // phone_number_disposition_comment: {
    //     type: String,
    //     label: "Phone Number Disposition Comment"
    // },
    // status: {
    //     type: String,
    //     label: "Status"
    // },
    // sms_active: {
    //     type: Boolean,
    //     label: "SMS Active"
    // },
    // primary_server: {
    //     type: String,
    //     label: "Primary Server"
    // },
    // secondary_server: {
    //     type: String,
    //     label: "Secondary Server"
    // },
    // idsite: { // 
    //     type: Number,
    //     label: "IdSite"
    // },
    // idvendors: { //
    //     type: Number,
    //     label: "IdVendors"
    // },
    // e911: { //
    //     type: Boolean,
    //     label: "E911"
    // },
    // advanta_number: {
    //    type: Boolean,
    //    label: "Advanta Number"
    // },
    // forward_to_number: {
    //     type: String,
    //     label: "Forward To Number"
    // }
}));