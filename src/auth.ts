import passport from 'passport'
import { Strategy } from 'passport-local'
import { Application } from 'express'

const user = {
  username: 'user',
  password: 'qwerty123'
}

passport.use(new Strategy({}, (username, password, done) => {
  if (user.username === username.toLowerCase() && user.password === password) {
    done(null, user)
  } else {
    done(null, false, { message: 'Incorrect username or password.' })
  }
}))

passport.serializeUser((user: any, done) => {
  done(null, user.username)
})

passport.deserializeUser((username, done) => {
  done(null, user)
})

export default (app: Application) => {
  app.use(passport.initialize())
  app.use(passport.session())
}
