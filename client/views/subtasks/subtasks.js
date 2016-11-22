Template.subtasks.events({
	"submit .subtasks-form" : function(event) {
		var userId = Meteor.userId();
		if( userId == null){
			console.log('Please Login first');
			return false;
		}else{
			var title = event.target.title.value;
			var task_type = event.target.task_type.value;
			var status = event.target.status.value;
			var assigned_person = event.target.assigned_person.value;
			var due_date = event.target.due_date.value;
			var task_name = event.target.task_name.value;
			subtasks.insert({
				userId: userId,
				title : title,
				task_type : task_type,
				status : status,
				assigned_person : assigned_person,
				due_date : due_date,
				task_name : task_name,
				CreatedAt : new Date()
			});
		}
		$('.subtasks-form')[0].reset();
		return false;
	}
});