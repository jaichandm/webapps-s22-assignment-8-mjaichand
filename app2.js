const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('Welcome to my World')
      res.write('<h3>Sports Activity</h3>')
      res.write('<p> Below Table gives an overview for participants to choose a particular Sport/Activity based on their interest. The Name column represents the name of the sport/activity. The Location column shows the location where to participate in the sport/activity. The Equipment Fee column shows the amount of money for personal equipment. </p>')
      res.write('<table>')
      res.write('<tr> <th>Name</th> <th>Location</th> <th>Equipment Fee</th> </tr>')
      res.write('<tr> <td>Football</td> <td>next to Colden Hall</td> <td>20$</td> </tr>')
      res.write('<tr> <td>Criket</td> <td>near Union Ball Room</td> <td>30$</td> </tr>')
      res.write('<tr> <td>TableTennis</td> <td>opp. Horizon West</td> <td>5$</td> </tr>')
      res.write('<tr> <td>Basketball</td> <td>Fitness Centre</td> <td>10$</td> </tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})