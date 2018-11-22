const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

/**
 * @file apollo server
 */

const app = express();

// 定义schema
const typeDefs = gql `
    type Author {
        id: Int
        firstName: String
        lastName: String
        posts: [Post]
    }
    type Post {
        id: Int
        title: String
        text: String
        views: Int
        author: Author
    }
    type Query {
        author(firstName: String, lastName: String): Author # 查询作者信息
        getFortuneCookie: String
    }
`;

const resolvers = {
    Query: {
        author(root, args) { // args就是上面schema中author的入参
            return { id: 1, firstName: 'Hello', lastName: 'World' };
        },
    },
    Author: {
        // 定义author中的posts
        posts(author) {
            return [
                { id: 1, title: 'A post', text: 'Some text', views: 2 },
                { id: 2, title: 'Another post', text: 'Some other text', views: 200 }
            ];
        },
    },
    Post: {
        // 定义Post里面的author
        author(post) {
            return { id: 1, firstName: 'Hello', lastName: 'World' };
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphiql' });


app.listen(4000, () => console.log(`hello graphql`));