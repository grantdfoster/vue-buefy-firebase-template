# Vue Buefy Firebase Template

## Project setup
*install packages*
```
yarn install
```
*setup environment variables*

`Place a .env file in your root directory with the following keys:`
```
VUE_APP_apiKey='<firebase api key here>'
VUE_APP_authDomain='<firebase auth domain here>'
VUE_APP_databaseURL='<firebase database url here>'
VUE_APP_projectId='<firebase project id here>'
VUE_APP_messagingSenderId='<firebase messaging sender id here>'
VUE_APP_appId='<firebase app id here>'
```

### Run Application Locally
*with hot-reload functionality!*
```
yarn serve
```

### Test Application
*Once this repository is hooked up to your Circle CI account, you can push to any branch (other than master) to automatically run tests via Circle CI*
*to run tests locally...*
```
yarn test:unit
yarn test:e2e
```

### Deploy Development Application
*push to the development branch, circle ci will automatically build, test, and deploy the application to the development environment.  if you want to deploy locally...*
```
yarn build
firebase use development 
firebase deploy
```


### Deploy Production Application
*push to the master branch, circle ci will automatically build, test, and deploy the application to the production environment.  You need to add your production environment variables to your Circle CI environment for this to work (similar structure to your .env file, only with different variables.  You will also need a FIREBASE_TOKEN variable set, to retrieve, run:*
```
firebase login:ci
```
*to get a token to use for the continuous integration process*
