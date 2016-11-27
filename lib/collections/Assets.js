Assets = new Mongo.Collection('asset');

Assets.attachSchema(new SimpleSchema({
    description: {
        type: String,
        label: "Description"
    },
    model_number: {
        type: String,
        label: "Model Number"
    },
    serial_number: {
        type: String,
        label: "Serial Number"
    },
    manufacturer: {
        type: String,
        label: "Manufacturer"
    },
    internal_ip_address: {
        type: String,
        label: "Internal IP Address"
    },
    public_ip_address: {
        type: String,
        label: "Public IP Address"
    },
    revenue_generating: {
        type: String,
        label: "Revenue Generating"
    },
    status: {
        type: String,
        label: "Status"
    },
    redundant_unit: { //
        type: String,
        label: "Redundant Unit"
    },
    miscelaneous: { //
        type: String,
        label: "Miscelaneous"
    },
    asset_type: {
        type: String,
        label: "Asset Type"
    },
    asset_subtype: {
        type: String,
        label: "Asset Subtype"
    },
    rde: { //
        type: String,
        label: "Rde"
    },
    mac_address: {
        type: String,
        label: "Mac Address"
    },
    location: {
        type: String,
        label: "Location"
    },
    advanta_owned: { //
        type: Boolean,
        label: "Advanta Owned"
    },
    vendor: { //
        type: String,
        label: "Vendor"
    },
    model_description: {
        type: String,
        label: "Model Description"
    },
    date_purchase: {
        type: String,
        label: "Date Purchase"
    },
    purchase_cost: {
        type: String,
        label: "Purchase Cost"
    },
    purchase_order: {
        type: String,
        label: "Purchase Order"
    },
    date_waranty_support_expires_date: { //
         type: String,
         label: "Date Waranty Support Expires Date"
    },
    date_installed: {
        type: String,
        label: "Date Installed"
    },
    date_of_next_scheduled_service:{ // label is not visible clearly
        type: String,
        label: "Date Of Next Scheduled Service"
    },
    date_last_upgraded: {
        type: String,
        label: "Date Last Upgraded"
    },
    version: {
        type: String,
        label: "Version"
    },
    
    
}));
