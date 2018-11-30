import { ApolloClient } from 'apollo-client';
import gql from 'graphql-tag';

/**
 * @file querys
 */

const QUERY_POST = gql`  
    query getUser($id: Int, $type: Boolean) {
        find (id: $id, type: $type) {
            name
        }
    }
`;

export function getPost(client: ApolloClient<any>, id: number) {
    return client.query({
        fetchPolicy: 'network-only',
        query: QUERY_POST,
        variables: { id }
    });
}