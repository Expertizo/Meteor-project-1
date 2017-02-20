Template.addAssets.events({
	"submit form": function(event){
		
		var userId = Meteor.userId();
		if(userId == ''){
			console.log("Please Login First");
			return false;
		}else{
			event.preventDefault();
			console.log("button working");
			
			var modelNumber = event.target.modelNumber.value;
			var serialNumber = event.target.serialNumber.value;
			var manufacturer = event.target.manufacturer.value;
			var internalIpAddress = event.target.internalIpAddress.value;
			var publicIpAddress = event.target.publicIpAddress.value;
			var revenueGenerating = event.target.revenueGenerating.value;
			var status = event.target.status.value;
			var redundantUnit = event.target.redundantUnit.value;
			var miscelaneous = event.target.miscelaneous.value;
			var assetType = event.target.assetType.value;
			var assetSubtype = event.target.assetSubtype.value;
			var macAddress = event.target.macAddress.value;
			var rde = event.target.rde.value;
			var advantaOwned = event.target.advantaOwned.value;
			var location = event.target.location.value;
			var vendor = event.target.vendor.value;
			var modelDescription = event.target.modelDescription.value;
			var datePurchase = event.target.datePurchase.value;
			var purchaseCost = event.target.purchaseCost.value;
			var purchaseOrder = event.target.purchaseOrder.value;
			var dateWarantySupportExpiresDate = event.target.dateWarantySupportExpiresDate.value;
			var dateInstalled = event.target.dateInstalled.value;
			var dateOfNextScheduledService = event.target.dateOfNextScheduledService.value;
			var dateLastUpgraded = event.target.dateLastUpgraded.value;
			var version = event.target.version.value;
			var description = event.target.description.value;
			var inv = event.target.inv_num.value;
			
			
			assets.insert({
				inv_num: inv,
                description: description,
				model_number: modelNumber,
				serial_number: serialNumber,
				manufacturer: manufacturer,
				internal_ip_address: internalIpAddress,
				public_ip_address: publicIpAddress,
				revenue_generating: revenueGenerating,
				status: status,
				redundant_unit: redundantUnit,
				miscelaneous: miscelaneous,
				asset_type: assetType,
				asset_subtype: assetSubtype,
				rde: rde,
				mac_address: macAddress,
				location: location,
				advanta_owned: advantaOwned,
				vendor: vendor,
				model_description: modelDescription,
				date_purchase: datePurchase,
				purchase_cost: purchaseCost,
				purchase_order: purchaseOrder,
				date_waranty_support_expires_date: dateWarantySupportExpiresDate,
				date_installed: dateInstalled,
				date_of_next_scheduled_service: dateOfNextScheduledService,
				date_last_upgraded: dateLastUpgraded,
				version: version,
                CreatedAt : new Date()
				// userId:userId,
				// name:name,
				// type:type,	
				// critical:critical,
				// ip_address:ip_address,
				// location:location,
				// modal:model,
				// mac:mac,
				// serial_number:serial_number,
				// other:other,
				// role:role,
				// date_purchase:date_purchase,
				// date_installed:date_installed,
				// version:version,
				// cost_with_shipping:cost_with_shipping,
				// working_notes:working_notes,

				
			},function (err) {
            if(err){
               sweetAlert("Oops...", "Something went wrong!", "error");
            }else{
				
				swal("Done!","Site successfully inserted!", "success")
                Router.go('assets');
            }
			
			});
		}
		//   $( function() {
        //  $( "#datePicker" ).datepicker();
        // } );
		$('.assets-form')[0].reset();
			return false;
	}
});