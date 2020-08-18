# currency-converter-API
Convert one currency to another. Doesn't get easier than this. My first attempt at consuming APIs

FetchAPI from the client sends a get http request to the backend. 
Here you use a query string to pass the information since the backend in this case consists of just 2 routes: the first being the home route app.get("/") and second being the route that fetch sends the request to. 
When fetch sends the request, the backend takes it, uses axios to send a HTTP request to the exchange API, does some currency manipulation, and sends the response back to fetch as a fulfilled promise. 
Data from this promise is displayed for the user to see
