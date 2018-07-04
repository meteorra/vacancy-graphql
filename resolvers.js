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
    createVacancy (parent, args) {
      return Vacancy.create(args)
    }
  }
}
