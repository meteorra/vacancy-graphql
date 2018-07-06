import Vacancy from './models/Vacancy'
import fetch from 'node-fetch'

export default {
  Query: {
    allVacancies () {
      return Vacancy.findAll()
    },
    getVacancyById (parent: any, args: any) {
      return Vacancy.findOne(args.id)
    },
    getEbayAutocomplete (parent: any, args: any) {
      return fetch(`https://haitao.ebay.com/data/autocomplete?keyword=${args.keyword}&site=none`)
        .then(response => response.json())
        .then(data => {
          return data
        })
        .catch()
    }
  },
  Mutation: {
    createVacancy (parent: any, args: any, contenxt: { user: object }) {
      if (!contenxt.user) throw new Error('You must be authorized to perform this action!')
      return Vacancy.create(args)
    }
  }
}
