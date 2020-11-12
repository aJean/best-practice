const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const data = require('./data.json');

/**
 * @file apollo server
 */

const app = express();

// cros config
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://test.baidu.com:8081');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');

    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// 定义schema
const typeDefs = gql `
    interface Character {
        id: Int!
        name: String!
    }
    type Author implements Character {
        id: Int!
        name: String!
        post: Post
    }
    type Post {
        id: Int
        text: String
    }
    type User implements Character {
        id: Int!
        name: String!
        attach: Int
    }
    union CommonResult = Author | User
    type Query {
        find(id: Int, type: Boolean): Character
        posts(data: mypost): [Post]
        hello: String
        user: User
        author: Author
    }
    # 输入类型
    input mypost {
        id: Int!
    }
`;

const resolvers = {
    Query: {
        find(root, args) {
            const list = args.type ? data.authorList : data.userList;
            return list.find(author => author.id == args.id);
        },
        author(root, args) {
            const list = data.authorList;
            return list.find(author => author.id == args.id);
        },
        user(root, args) {
            const list = data.userList;
            return list.find(item => item.id == args.id);
        },
        hello() {
            return 'i love this game';
        },
        posts(root, args) {
            console.log(args)
            return data.posts;
        }
    },
    Author: {
        // 定义author中的posts
        post(author) {
            const list = data.posts;
            return list.find(post => author.id == post.id);
        },
    },
    // 接口类型
    Character: {
        __resolveType(obj, context, info) {
            if (obj.attach) {
                return 'User';
            }
    
            if (obj.book) {
                return 'Author';
            }
    
            return null;
        }
    },
    // 联合类型, 区别是不指定任何字段，只能使用片段查询
    CommonResult: {
        __resolveType(obj, context, info) {
            if (obj.attach) {
                return 'User';
            }
    
            if (obj.book) {
                return 'Author';
            }
    
            return null;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphiql' });
server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, () => console.log(`hello graphql`));

/*
query getUser($id: Int, $type: Boolean) {
    find (id: $id, type: $type) {
        name
        ... on User {
        attach
        }
    }
}
*/