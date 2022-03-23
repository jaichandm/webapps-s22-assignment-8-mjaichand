const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {
                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const advices = ["Sarah Hyland born on November 24, 1990 (age 31 years), Manhattan, New York, NY.", "Sarah's pet name Barkley Bixby.", "Sarah's pet breed is Maltipoo.", "Sarah lives in Los Angeles.", "Sarah is an American actress.", "Sarah currently engaged to Wells Adams."]
                let rIndex1 = Math.floor(Math.random()*(advices.length-1))
                let rIndex2 = Math.floor(Math.random()*(advices.length-1))
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write("1. \"")
                res.write(`${advices[rIndex1]}`)
                res.write("\"\n2. \"")
                res.write(`${advices[rIndex2]}`)
                res.write("\"")
                res.end();
            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }
        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})