// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '313449749238125', // your App ID
        'clientSecret'  : '037195c38ff326c53e7775105d58f080', // your App Secret
        'callbackURL'   : 'https://assigment3bygouththam.herokuapp.com/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
      },

          'githubAuth' : {
          'clientID' 		: 'f974a8c96df3d9f2f661',
        'clientSecret' 	: 'ed7fe2f6a8300c2ae84f3ddc6c701f3f7749ccc8',
         'callbackURL' 	: 'http://localhost:8080/auth/github/callback'
      },


        'googleAuth' : {
            'clientID'      : '976501629768-qnmqu7q0l7svf82hfbfco98l5j99melm.apps.googleusercontent.com',
            'clientSecret'  : 'A3QKhme2qnZHMrRhrmCu_e_k',
            'callbackURL'   : 'https://assigment3bygouththam.herokuapp.com/auth/google/callback'
        }

    };
