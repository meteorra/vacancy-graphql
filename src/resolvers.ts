import Vacancy from './models/Vacancy'

export default {
  Query: {
    allVacancies () {
      return Vacancy.findAll()
    },
    getVacancyById (parent: any, args: any) {
      return Vacancy.findOne(args.id)
    }
  },
  Mutation: {
    createVacancy (parent: any, args: any, contenxt: { user: object }) {
      if (!contenxt.user) throw new Error('You must be authorized to perform this action!')
      return Vacancy.create(args)
    }
  }
}
