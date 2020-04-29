# currency-converter-API
Convert one currency to another. Doesn't get easier than this. My first attempt at consuming APIs

So fetch from the client sends a get http request to the backend. 
Here you use a query string to pass the information since the backend in this case consists of just 2 routes. 
The home page app.get("/") and the route that fetch sends the request to. 
When fetch sends the request, the backend takes it and uses axios to send a HTTP request and sends the response back to fetch as a fulfilled promise. 
You can then do whatever you please with the data
