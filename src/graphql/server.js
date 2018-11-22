const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { MongoClient } = require('mongodb');
const data = require('./data.json');

/**
 * @file graphql data
 * cros options return 200, cookie origin set host
 */

const schema = buildSchema(`
    type Query {
        hello: String,
        msg: Int,
        getUser(index: Int!): User
    }

    type User {
        name: String,
        id: Int
    }
`);

const root = {
    hello: () => {
        return 'Hello world!';
    },

    msg: () => {
        return 2;
    },

    getUser: ({index}) => {
        return data.userList[index];
    }
};

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

app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.post('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.get('/test', function(req, res) {
    return res.send('111111111');

    MongoClient.connect('mongodb://localhost:27017', function (err, db) {
        console.log(err)
        const person = db.db('person');
        const student = person.collection('student');

        student.insertOne({
            "name": "insert in nodejs"
        },function (error, result) {
            res.send(result);
            db.close();
        });
    });
});

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');