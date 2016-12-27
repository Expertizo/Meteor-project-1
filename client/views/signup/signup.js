Template.signup.events({
	"submit .signup" : function(event){
         var username = event.target.client_email.value;
         var email = event.target.client_name.value;
        // Meteor.call(createNewUser,email,username,function(err,res) {
        //     if(res){
        //         alert("Success");
        //     }else{
        //         alert("error");
    //-->  Email Enroll Start Here
        //     Meteor.call("SendEmail",email,"razatechuc11@gmail.com",username,"ABC",function (err,res) {
        //         if(res){
        //             alert("Email Successfully sent");
        //         }else{
        //             alert("Some error acurd");
        //         }
        //     });  
        //  }
    //   -->  Email Enroll End Here
    
		var C_email = trimInput(event.target.client_email.value);
		var C_password = trimInput(event.target.client_password.value);
	//	var confirm_passsword = trimInput(event.target.confirm_password.value);
		var C_name = trimInput(event.target.client_name.value);
		//var last_name = trimInput(event.target.last_name.value);
		Accounts.createUser({
			email:C_email,
			password:C_password,
			profile:{
				name:C_name
			}
		},function(err){
			if(err){
				MaterializeModal.message({
					title:'Error',
					message:'There was some error while Signup'
				});
                alert("Client Not Registered.");
			}else{
				MaterializeModal.message({
					title:'Success',
					message:'Account Created! You are now logged In'
				});
                alert("Client Successfully Registered.");
				// Meteor.loginWithPassword(email,password,function(err){
				// 	if(err){
				// 		event.target.C_email.value = email;
				// 		event.target.C_password.value = password;
				// 		MaterializeModal.message({
				// 			title:'Error',
				// 			message:'err.reason'
				// 		});
				// 	} else {
				// 		FlashMessages.sendSuccess("You are now logged In");
				// 		Router.go('home.html');
				// 	}
				// });
				
			}

		});
		$('.signup')[0].reset();
	    Router.go('home');
    	return false;
	 
    }
});

//trim inputs
var trimInput = function(val){
	return val.replace(/^\s*$/g,'');
} 