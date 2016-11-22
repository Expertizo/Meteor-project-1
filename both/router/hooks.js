var routesForUnloggedUsers = [
    // 'login',
    // 'register',
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

// Router.onBeforeAction(isLoggedIn, {
//     except: routesForUnloggedUsers
// });
