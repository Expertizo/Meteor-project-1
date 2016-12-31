Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'home'
    });
    this.route('assets', {
        path: '/assets',
        template: 'assets'
    });
    this.route('contacts', {
        path: '/contacts',
        template: 'contacts'
    });
     this.route('phone_add', {
        path: '/phone_add',
        template: 'Phone_add'
    });
    this.route('phone_number',{
        path: '/phone_number',
        template: 'phone_number'
    });
    this.route('phone_details',{
        path: '/phone_details/:id',
        template: 'phone_details'
    });
 
   
      this.route('projects', {
        path: '/projects',
        template: 'projects'
    });
       this.route('server_assets', {
        path: '/server_assets',
        template: 'server_assets'
    });
     this.route('sites', {
        path: '/sites',
        template: 'sites'
    });
     this.route('subtasks', {
        path: '/subtasks',
        template: 'subtasks'
    });
    this.route('tasks', {
        path: '/tasks',
        template: 'tasks'
    });
     this.route('signup', {
        path: '/signup',
        template: 'signup'
    });
      this.route('login', {
        path: '/login',
        template: 'login'
    });
    this.route('header', {
        path: '/header',
        template: 'header'
    });
    this.route('admin', {
        path: '/admin',
        template: 'Owner'
    });
    this.route('detail', {
        path: '/detail/:id',
        template: 'details'
    });
    this.route('insertSite', {
        path: '/insert_site',
        template: 'insertSite'
    });
    this.route('adminView', {
       path: '/adminView',
       template: 'admin_fview' 
    });
})
 // function (params) {
        //     this.render('data',{
        //         data: function() {
        //             return Sites.findOne({_id: this.params.id}); 
        //     }
        //     });         
        //}