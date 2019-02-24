import firebase from 'firebase/app'

export default {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // console.log(authResult)
        // console.log(redirectUrl)
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:8080/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
      
    ],
    // Terms of service url.
    tosUrl: '',
    // Privacy policy url.
    privacyPolicyUrl: ''
  };