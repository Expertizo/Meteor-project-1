Template.phone_numbers.events({
	"submit .phone_numbers-form" : function(event) {
		var userId = Meteor.userId();
		if( userId == null){
			console.log('Please Login first');
			return false;
		}else {
			var carrier_name = event.target.carrier_name.value;
			var primary_server =  event.target.primary_server.value;
			var secondary_server = event.target.secondary_server.value;
			var primary_gateway = event.target.primary_gateway.value;
			var secondary_gateway = event.target.secondary_gateway.value;
			var status = event.target.status1.value;
			var site_name = event.target.site_name.value;
			var role = event.target.role.value;
			var phone_history = event.target.phone_history.value;
			phone_numbers.insert({
				userId: userId,
				carrier_name:carrier_name,
				primary_server:primary_server,
				secondary_server:secondary_server,
				primary_gateway:primary_gateway,
				secondary_gateway:secondary_gateway,
				status:status,
				site_name:site_name,
				role:role,
				phone_history:phone_history,
				CreatedAt : new Date()
			});
		}
		$('.phone_numbers-form')[0].reset();
		return false;
	}
});