# Code from Scott McAllister Meteor, React, React Router and auth
### Great tutorial to dig into custom Auth with Meteor and React (using React Router)
[link to article](http://www.mrscottmcallister.com/custom-authentication-in-meteor/)

### Minor code tweaks
* Switch `.jsx` to `js`
* Added `.eslintrc` for Meteor and React app
* Remove unused imports
* Add new way to import PropTypes (It is now separated from React)
* Used `refs` instead of grabbing DOM elements by their `id`
* Comment out setState on successful account creation
* Change MainPage PropType to `currentUser` and switch to `object` instead of `string`
* After successful account creation, I changed the route from `/login` to `/` so user is immediately taken to app
* Used ES6 template string on MainPage Component
* On SignupPage Component I used ES6 Object Literal Property Value Shorthand when using Meteor's `Accounts.createUser()`