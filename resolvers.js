const Vacancy = require('./models/Vacancy')

module.exports = {
  Query: {
    allVacancies () {
      return Vacancy.findAll()
    },
    getVacancyById (parent, args) {
      return Vacancy.findOne(args.id)
    }
  },
  Mutation: {
    createVacancy (parent, args, { user }) {
      if (!user) throw new Error('You must be authorized to perform this action!')
      return Vacancy.create(args)
    }
  }
}
