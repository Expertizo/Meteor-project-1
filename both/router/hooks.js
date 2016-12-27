var routesForUnloggedUsers = [
    'login',
    'admin' 
];
var routesForClients = [
    'sites',
    'phone_number',
    'contacts',
    'tasks',
    'assets',
    'home',
    'login'
    
];

var isLoggedIn = function () {
    var user = Meteor.user();
    if (!user && !Meteor.loggingIn()) {
        Router.go('login');
    }
    else {
        this.next();
    }
};
var isClient = function() {
    
    var user = Meteor.user();
    var email = user.emails[0].address;
    // console.log("Email...");
    // console.log(email);
    var currentRouter = Router.current().route.getName();
    // console.log("Current Router");
    // console.log(currentRouter);
    if(user){
    Meteor.call("admin_login_e",email,function(err,res) {
       if(err){
            alert("you are not allowed here");      
       }else{
           this.next();
       }    
   
    });
    }
   
}

Router.onBeforeAction(isLoggedIn, {
    except: routesForUnloggedUsers
});
// Router.onBeforeAction(isClient, {
//     except: routesForClients
// });
