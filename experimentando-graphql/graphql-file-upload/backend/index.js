const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    uploads: [File]
  }

  type Mutation {
    singleUpload(file: Upload!): File!
    singleUploadStream(file: Upload!): File!
  }
`;

const resolvers = {
  Mutation: {
    singleUpload: (parent, args) => {
      return args.file.then(file => {
        const {createReadStream, filename, mimetype} = file;

        const fileStream = createReadStream();

        fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${filename}`));

        return file;
      });
    },

    singleUploadStream: async (parent, args) => {
      const file = await args.file;
      const { createReadStream, filename, mimetype } = file;
      const fileStream = createReadStream();

      const uploadParams = {Bucket: 'apollo-file-upload-test', Key: filename, Body: fileStream};
      const result = await s3.upload(uploadParams).promise();

      console.log(result);

      return file;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});