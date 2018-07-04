const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const jwt = require('express-jwt')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const authMiddleware = jwt({
  secret: 'f%a64TA_3bA',
  credentialsRequired: false
})
const schema = makeExecutableSchema({typeDefs, resolvers})

const app = express()
app.use(authMiddleware)
app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ schema, context: { user: req.user } })))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'))
