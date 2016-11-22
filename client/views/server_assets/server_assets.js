Template.server_assets.events({
	"submit .server_assets-form" : function(event) {
		var userId = Meteor.userId();
		if(userId == null){
			console.log('Please Login first');
			return false;
		}else{
			var internal_ip_address= event.target.internal_ip_address.value;
			var external_ip_address = event.target.external_ip_address.value;
			var firewall_address = event.target.firewall_address.value;
			var putty_address = event.target.putty_address.value;
			var dns_serve_address = event.target.dns_serve_address.value;
			var a_record_address = event.target.a_record_address.value;
			var ftp_address = event.target.ftp_address.value;
			server_assets.insert({
				userId: userId,
				internal_ip_address: internal_ip_address,
				external_ip_address: external_ip_address,
				firewall_address: firewall_address,
				putty_address: putty_address,
				dns_serve_address: dns_serve_address,
				a_record_address: a_record_address,
				ftp_address: ftp_address,
				CreatedAt: new Date()
			});
		}
		 document.server_assets-form.reset();
			return false;
	}
});
