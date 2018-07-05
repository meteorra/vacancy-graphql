import { authenticate } from 'passport'
import { Request, Response, NextFunction } from 'express'

export const login = (req: Request, res: Response, next: NextFunction): void => {
  authenticate('local', (err, user, info) => {
    if (err) return next(err)
    if (!user) return res.json(info)
    req.login(user, err => {
      if (err) return next(err)
      return res.json({ message: 'You are welcome.' })
    })
  })(req, res, next)
}

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout()
  res.json({ message: 'Bye. See you later.' })
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  res.json({ isAuthenticated: req.isAuthenticated() })
}
