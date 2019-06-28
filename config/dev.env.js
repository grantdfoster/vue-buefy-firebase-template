require('dotenv').config()

module.exports = {
  VUE_APP_apiKey: process.env.VUE_APP_apiKey,
  VUE_APP_authDomain: process.env.VUE_APP_authDomain,
  VUE_APP_databaseURL: process.env.VUE_APP_databaseURL,
  VUE_APP_projectId: process.env.VUE_APP_projectId,
  VUE_APP_messagingSenderId: process.env.VUE_APP_messagingSenderId,
  VUE_APP_appId: process.env.VUE_APP_appId
}