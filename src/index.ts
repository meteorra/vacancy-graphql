import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import auth from './auth'
import * as authController from './controllers/authController'
import ebayRouter from './routers/ebayRouter'

const schema = makeExecutableSchema({typeDefs, resolvers})

const app: Application = express()
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({ secret: 'some_sevret#key' }))
auth(app)
app.post('/login', authController.login)
app.get('/logout', authController.logout)
app.get('/isAuthenticated', authController.isAuthenticated)
app.use('/ebay', ebayRouter)
app.use('/graphql', graphqlExpress((req: any) => ({ schema, context: { user: req.user } })))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'))
