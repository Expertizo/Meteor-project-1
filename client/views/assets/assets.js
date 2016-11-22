Template.assets.events({
	"submit .assets-form": function(event){
		var userId = Meteor.userId();
		if(userId == ''){
			console.log("Please Login First");
			return false;
		}else{
			var name = event.target.name1.value;
			//var type = $('#type').val();
		
			//var critical = event.target.critical.value;
			var ip_address = event.target.ip_address.value;
			var location = event.target.location1.value;
			var model = event.target.model.value;
			var mac = event.target.mac.value;
			var serial_number = event.target.serial_number.value;
			var other = event.target.other.value;
			var role = event.target.role.value;
			var date_purchase = event.target.date_purchase.value;
			var date_installed = event.target.date_installed.value;
			var version = event.target.version1.value;
			var cost_with_shipping = event.target.cost_with_shipping.value;
			var working_notes = event.target.working_notes.value;
			assets.insert({
				userId:userId,
				name:name,
				type:type,	
				critical:critical,
				ip_address:ip_address,
				location:location,
				modal:model,
				mac:mac,
				serial_number:serial_number,
				other:other,
				role:role,
				date_purchase:date_purchase,
				date_installed:date_installed,
				version:version,
				cost_with_shipping:cost_with_shipping,
				working_notes:working_notes,
				CreatedAt : new Date()
			});
		}
		$('.assets-form')[0].reset();
			return false;
	}
});