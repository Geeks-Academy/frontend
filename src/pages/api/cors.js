// import Cors from 'cors'
// import initMiddleware from '../../lib/init-middleware'

/* Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate
 any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources.
  CORS also relies on a mechanism by which browsers make a “preflight” request to the server hosting the
   cross-origin resource, in order to check that the server will permit the actual request. In that preflight,
    the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. /*

/* An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com
 uses XMLHttpRequest to make a request for https://domain-b.com/data.json. */

 /* For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.
  For example, XMLHttpRequest and the Fetch API follow the same-origin policy.
  This means that a web application using those APIs can only request resources from 
  the same origin the application was loaded from unless the response
   from other origins includes the right CORS headers. */

// Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST'],
//   })
// )

// export default async function handler(req, res) {
//   // Run cors
//   await cors(req, res)

//   // Rest of the API logic
//   res.json({ message: 'Hello Everyone!' })
// }


// ALTERNATIVE SOLUTION, WIHOUT NEED TO INITIALIZE init-middleware.js
// POSSIBILITY OF SETTING UP CONFIGURATION TOGETHER WITH AVAILABLE METHODS AND ORIGIN

import NextCors from 'nextjs-cors';
 
async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://www.npmjs.com/package/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET'],
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });
 
   // Rest of the API logic
   res.json({ message: 'Hello Everyone!' });
}