module.exports = [`
enum JobType {
  PERMANENT
  SEASONAL
  PART_TIME
}

type Vacancy {
  id: Int!
  name: String!
  company: String!
  salary: Int
  location: String!
  jobType: JobType!
  description: String
}

type Query {
  allVacancies: [Vacancy!]!
  getVacancyById(id: Int!): Vacancy!
}

type Mutation {
  createVacancy(name: String!, company: String!, salary: Int, location: String!, jobType: JobType!, description: String): Int!
}

schema {
  query: Query
  mutation: Mutation
}`]
