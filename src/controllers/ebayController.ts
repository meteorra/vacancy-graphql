import { Request, Response, NextFunction } from 'express'
import fetch from 'node-fetch'

export const autocomplete = (req: Request, res: Response, next:NextFunction) => {
  fetch(`https://haitao.ebay.com/data/autocomplete?keyword=${req.query.keyword}&site=none`)
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })
    .catch(next)
}
