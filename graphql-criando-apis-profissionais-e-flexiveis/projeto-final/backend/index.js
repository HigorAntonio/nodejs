require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers')
const context = require('./config/context')

const schemaPath = './schema/index.graphql' // O caminho deve ser absoluto
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
    context
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})