# node-cors-example

A demo of the effect of setting a CORS allowed origin response header in a service.

## Examples

### Same Origin Policy

In terminal 1 (same host),
```
npm i
npm run start-server-no-cors
```
- Open the web app at http://localhost:3000/
- Submit a few messages, both plain text and JSON
- Notice that the web app works as you'd expect

In terminal 2 (not same host),
- `npm run start-web-app`
- Open the web app at http://127.0.0.1:8080/
- Submit a few messages, both plain-text and JSON
- Notice that the web app does not display any feedback
- However in the node server logs, you'll see your plain-text messages

### CORS Enabled

In terminal 1 (same host),
```
npm i
npm run start-server-with-cors
```
- Open the web app at http://localhost:3000/
- Submit a few messages
- Notice that the web app works as you'd expect

In terminal 2 (not same host, but allowed origin),
- `npm run start-web-app`
- Open the web app at http://127.0.0.1:8080/
- Submit a few messages
- Notice that the web app works as you'd expect

In terminal 3(not same host, and not allowed origin),
- `npm run start-web-app-blocked`
- Open the web app at http://127.0.0.1:6666/
- Submit a few messages
- Notice that the web app does not display any feedback
- However in the node server logs, you'll see your plain-text messages

## Recap

CORS allows you to access a resource outside of your current browsed domain.
Without CORS enabled, you would only be able to access the Node API directly at its hosted domain (localhost:3000).

Setting a specific Access-Control-Allow-Origin in your service will prevent a *browser* request from *displaying* a response from your service.  It does not prevent the execution of a request.

A simple request will always make it to the server and be handled.
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests

A non-simple request will not get handled by the server, due to the browser replacing your request with a preflight (OPTIONS) request.  This will get handled by the server and rejected, causing the original request (POST, PUT, etc) to never be sent.

