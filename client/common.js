Meteor.startup(function(){

    
    AcountsEntery.config({
	
    	homeRoute: '/',
		dashboardRoute: '/',
		passswordSignupFields: 'USERNAME_AND_EMAIL',
		passswordSignupFields: 'IMAGE'
	});
		Accounts.ui.config({
			passswordSignupFields: 'USERNAME_AND_EMAIL',
			passswordSignupFields: 'IMAGE'
		});
});