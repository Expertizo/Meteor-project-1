Template.signup.events({
	"submit .signup" : function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);
		var confirm_passsword = trimInput(event.target.confirm_password.value);
		var first_name = trimInput(event.target.first_name.value);
		var last_name = trimInput(event.target.last_name.value);
		Accounts.createUser({
			email:email,
			password:password,
			profile:{
				first_name:first_name,
				last_name:last_name
			}
		},function(err){
			if(err){
				MaterializeModal.message({
					title:'Error',
					message:'There was some error while Signup'
				});
			}else{
				MaterializeModal.message({
					title:'Success',
					message:'Account Created! You are now logged In'
				});
				Meteor.loginWithPassword(email,password,function(err){
					if(err){
						event.target.email.value = email;
						event.target.password.value = password;
						MaterializeModal.message({
							title:'Error',
							message:'err.reason'
						});
					} else {
						FlashMessages.sendSuccess("You are now logged In");
						Router.go('home.html');
					}
				});
				
			}

		});
		$('.signup')[0].reset();
		return false;
	}
});

//trim inputs
var trimInput = function(val){
	return val.replace(/^\s*$/g,'');
} 