var condition = false;
Template.Phone_add.events({
	"submit .phone_numbers-form" : function(event) {
       
		var userId = Meteor.userId();
		if( userId == null){
			console.log('Please Login first');
			return false;
		}else {
			var Site = event.target.site.value;
			var Phone_number =  event.target.phone_number.value;
			var Status = event.target.status.value;
			var Use = event.target.use.value;
			var Primary_server = event.target.primary_server.value;
			var Carrier = event.target.carrier.value;
			var E911 = event.target.e911.value;
			var Comment = event.target.comment.value;
			var Secondary_server = event.target.secondary_server.value;
			var Advanta_number = event.target.advanta_number.value;
			var Forward_number = event.target.forward_number.value;
		       phone_numbers.insert({
				phone_number: Phone_number,
                site: Site,
                status: Status,
                use: Use,
                primary_server: Primary_server,
                carrier: Carrier,
                e911: E911,
                comment: Comment,
                secondary_server: Secondary_server,
                advanta_number: Advanta_number,
                forward_number: Forward_number
                // userId: userId,
				// carrier_name:carrier_name,
				// primary_server:primary_server,
				// secondary_server:secondary_server,
				// primary_gateway:primary_gateway,
				// secondary_gateway:secondary_gateway,
				// status:status,
				// site_name:site_name,
				// role:role,
				// phone_history:phone_history,
				// CreatedAt : new Date()
                
			});
                
                $('.phone_numbers-form')[0].reset();
                alert("Data Inserted");
                Router.go("phone_number");
                return false;
        }
    }
});