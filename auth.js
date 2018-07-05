const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const user = {
  username: 'user',
  password: 'qwerty123'
}

passport.use(new LocalStrategy({}, (username, password, done) => {
  if (user.username === username.toLowerCase() && user.password === password) {
    done(null, user)
  } else {
    done(null, false, { message: 'Incorrect username or password.' })
  }
}))

passport.serializeUser((user, done) => {
  done(null, user.username)
})

passport.deserializeUser((username, done) => {
  done(null, user)
})

module.exports = app => {
  app.use(passport.initialize())
  app.use(passport.session())
}
