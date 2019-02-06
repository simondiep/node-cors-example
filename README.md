# node-cors-example

A demo of the effect of setting a CORS allowed origin response header in a service.

## Steps

In terminal 1,
```
npm i
npm run start-server
```

In terminal 2,
- `npm run start-web-app`
- Open the web app at http://127.0.0.1:8080/
- Submit a few messages
- Notice that the web app works as you'd expect

In terminal 3,
- `npm run start-web-app-blocked`
- Open the web app at http://127.0.0.1:8081/
- Submit a few messages
- Notice that the web app does not display any feedback
- However in the node server logs, you'll see your messages

## Recap

CORS allows you to access a resource outside of your current browsed domain.

Setting a specific Access-Control-Allow-Origin in your service will prevent a *browser* request from displaying a response from your service.  It does not prevent the execution of a request.