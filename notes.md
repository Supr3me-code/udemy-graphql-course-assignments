### Concepts learnt

points about graphQL - 
1. relieve wieght from the frontend by fetching only the data that is required and not everything present in the endpoint
2. creating simpler url endpoints for highly nested applications
3. types of graphql clients - lokka, apollo, relay - vid. 30
4. difference b/w graphql express and apollo server (in syntax) - vid. 31


steps to get data from gql to frontend
1. identify the data required by the component
2. write query in gql and in component file
3. bond query + component
4. access data


fragments in GraphiQL -> fragment FRAGMENT_NAME on TYPE_NAME {
    ...
}