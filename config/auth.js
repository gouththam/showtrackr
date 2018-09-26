// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '2023352757976111', // your App ID
        'clientSecret'  : '29b8f94b521586b51f3e0ec33a17ef26', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
      },

          'githubAuth' : {
          'clientID' 		: 'f974a8c96df3d9f2f661',
        'clientSecret' 	: 'ed7fe2f6a8300c2ae84f3ddc6c701f3f7749ccc8',
         'callbackURL' 	: 'http://localhost:8080/auth/github/callback'
      },


        'googleAuth' : {
            'clientID'      : '187542123550-sqalel0b7b4f1dlm636ks8ab0qda638l.apps.googleusercontent.com',
            'clientSecret'  : 'nYCQEgBW6WemPNy2qbLKzmAp',
            'callbackURL'   : 'http://localhost:8080/auth/google/callback'
        }

    };
