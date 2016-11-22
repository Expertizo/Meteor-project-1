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
     this.route('phone_numbers', {
        path: '/phone_numbers',
        template: 'phone_numbers'
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
})