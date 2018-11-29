const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const data = require('./data.json');

/**
 * @file apollo server
 */

const app = express();


// 定义schema
const typeDefs = gql `
    type Author {
        id: Int
        name: String
        post: Post
    }
    type Post {
        id: Int
        text: String
    }
    type Query {
        author(id: Int): Author
        posts: [Post]
        hello: String
    }
`;

const resolvers = {
    Query: {
        author(root, args) {
            const list = data.userList;
            return list.find(author => author.id == args.id);
        },
        hello() {
            return 'i love this game';
        },
        posts() {
            return data.posts;
        } 
    },
    Author: {
        // 定义author中的posts
        post(author) {
            const list = data.posts;
            return list.find(post => author.id == post.id);
        },
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphiql' });


app.listen(4000, () => console.log(`hello graphql`));