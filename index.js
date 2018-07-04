const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({typeDefs, resolvers})

var app = express()
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'))
