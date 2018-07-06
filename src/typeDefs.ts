export default [`
enum JobType {
  PERMANENT
  SEASONAL
  PART_TIME
}

type Vacancy {
  id: Int!
  name: String!
  company: String!
  salary: Int!
  location: String!
  jobType: JobType!
  description: String
}

type EbayAutocomplete {
  prefix: String!
  brands: [String]!
  site: String!
  result: [EbayAutocompleteResult!]!
}

type EbayAutocompleteResult {
  keyword: String!
  categoryName: String!
  categoryId: Int!
  source: String!
  index: Int!
}

type Query {
  allVacancies: [Vacancy!]!
  getVacancyById(id: ID!): Vacancy!
  getEbayAutocomplete(keyword: String!): EbayAutocomplete
}

type Mutation {
  createVacancy(name: String!, company: String!, salary: Int, location: String!, jobType: JobType!, description: String): Int!
}

schema {
  query: Query
  mutation: Mutation
}`]
