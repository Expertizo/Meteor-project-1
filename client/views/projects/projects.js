Template.projects.events({
	"submit .projects-form" : function(event) {
		var userId = Meteor.userId();
		if( userId == null){
			console.log('Please Login first');
			return false;
		}else {
			var company_link = event.target.company_link.value;
			var site_link = event.target.site_link.value;
			var status = event.target.status.value;
			var project_name = event.target.project_name.value;
			var task = event.target.task.value;
			projects.insert({
				userId: userId,
				company_link: company_link,
				site_link: site_link,
				status : status,
				project_name : project_name,
				task : task,
				CreatedAt : new Date()
			});
			
		}
		$('.projects-form')[0].reset();
		return false;
	}
});