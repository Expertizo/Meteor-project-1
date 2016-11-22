Template.contacts.events({
	"submit .contacts-form": function(event) {
		var userId = Meteor.userId();
		if( userId == null){
			console.log('Please Login first');
			return false;
		}else{
			var first_name = event.target.first_name.value;
			var last_name = event.target.last_name.value;
			var position = event.target.position.value;
			var address = event.target.address.value;
			var city = event.target.city.value;
			var state = event.target.state.value;
			var zip = event.target.zip.value;
			var superior_title = event.target.superior_title.value;
			var office_phone_number = event.target.office_phone_number.value;
			var email = event.target.email.value;
			var display_option = event.target.display_option.value;
			var show_phones = event.target.show_phones.value;
			var show_lines = event.target.show_lines.value;
			var phone_mac_address = event.target.phone_mac_address.value;
			var DID = event.target.DID.value;
			var entension = event.target.entension.value;
			var group = event.target.group.value;
			var group_name = event.target.group_name.value;
			var group_id = event.target.group_id.value;
			var affiliations = event.target.affiliations.value;
			contacts.insert({
				userId:userId,
				first_name:first_name,
				last_name:last_name,
				position:position,
				address:address,
				city:city,
				state:state,
				zip:zip,
				superior_title:superior_title,
				office_phone_number:office_phone_number,
				email:email,
				display_option:display_option,
				show_phones:show_phones,
				show_lines:show_lines,
				phone_mac_address:phone_mac_address,
				DID:DID,
				entension:entension,
				group:group,
				group_name:group_name,
				group_id:group_id,
				affiliations:affiliations,
				CreatedAt : new Date()
			});
		}
			$('.contacts-form')[0].reset();
			return false;		
	}
});