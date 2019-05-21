# Node-API-Development
Sample Node JS API to get country list

This sample project uses https://restcountries.eu API to get country list.

Start node server by typing command

> node index.js

Now run http://localhost:8080/countries in your browser.

You can filter country by passing "searchby" and "query" parameters.

Here are some sample urls

http://localhost:8080/countries?searchby=name&query=india

http://localhost:8080/countries?searchby=currency&query=inr

http://localhost:8080/countries?searchby=capital&query=delhi

http://localhost:8080/countries?searchby=language&query=en

http://localhost:8080/countries?searchby=region&query=asia

http://localhost:8080/countries?searchby=regionalbloc&query=eu
