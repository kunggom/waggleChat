
Accounts.ui.config({
  requestPermissions: {
    facebook: ['public_profile', 'email'],
    google: ['profile' , 'email']
  },
  passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL",
});

Accounts.config({
    loginExpirationInDays: 0.02
});
