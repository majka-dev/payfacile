Router.configure({
    layoutTemplate: 'layout'
    /*loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts'); }*/
});

Router.route('/', {
    name: 'welcome'
});

Router.route('/user', { //route name
    name: 'user' //template name
});

Router.route('/form', {
    name: 'form'
});

//useraccounts package view configuration
AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('changePwd');

AccountsTemplates.configureRoute('enrollAccount');

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd');

AccountsTemplates.configureRoute('signUp');

AccountsTemplates.configureRoute('resendVerificationEmail');

AccountsTemplates.configureRoute('verifyEmail');

