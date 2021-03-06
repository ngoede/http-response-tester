# http-response-tester

A simple <a href="http://expressjs.com/" title="Express" target="_blank">Express</a> app that responds to an HTTP request with the HTTP status code that was requested. Licensed under the MIT License.

## Usage
Install dependencies:

```bash
$ npm install
```
    
Start application:

```bash
$ node js/http-response-tester.js
```
    
Send a request to the express server:

```bash
$ curl -I http://localhost:3000/status/{statusCode}
```

## Motivation
I decided to develop this little utility because I needed a way to test how an HTTP client would behave with various 
possible responses. This was a lot easier than trying to force the status codes using other means.
