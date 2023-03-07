## Review of RESTful Routing

Given a collection of records on a server, there should be a uniform URL and HTTP request method used to utilize that collection of records

## Shortcomings of RESTful Routing

 - Have to make seperate http requests for every piece of data
 - Have to make very particular routes (no generalization)

 - Deciding on the URL schema gets tough when we have heavily nested relationships
 - When we have heavily nested data, we end up making too many http requests for the data that we need
 - Vulnerable to over-fetching data 