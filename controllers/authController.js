const passport = require('passport')

module.exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log(err, user, info)
    if (err) return next(err)
    if (!user) return res.json(info)
    req.login(user, err => {
      if (err) return next(err)
      return res.json({ message: 'You are welcome.' })
    })
  })(req, res, next)
}

module.exports.logout = (req, res, next) => {
  req.logout()
  res.json({ message: 'Bye. See you later.' })
}

module.exports.isAuthenticated = (req, res, next) => {
  res.json({ isAuthenticated: req.isAuthenticated() })
}
