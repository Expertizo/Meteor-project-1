Template.login.events({
	"submit .login" : function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);
         Meteor.call("admin_login_e",email,function(err,res) {
            if(!res){
                Meteor.loginWithPassword(email,password,function(err){
                    if(err){
                        alert("Invalid Email or password please try again to proceed");
                    }else{
                    Router.go('home');
                    }
                });
            }else{
                alert("Admin is not allowed here to be login");
            }
        });
	
		// 	if(err){
		// 		event.target.email.value = email;
		// 		event.target.password.value = password;
		// 		MaterializeModal.message({
		// 			title:'Error',
		// 			message:"err.reason"
		// 		});
		// 	} else {
		// 		MaterializeModal.message({
		// 			title:'Success',
		// 			message:'Your are now Logged In'
		// 		});
		// 		$('#modal1').closeModal();
		// 	}
		// });		
		// $('.login')[0].reset();
		 return false;
	    
    }
   
});

//trim inputs
var trimInput = function(val){
	return val.replace(/^\s*$/g,'');
} 
