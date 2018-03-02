const http = require ('http') ;
const fs = require('fs') ;

fs.readFile ('index.html' ,  (err, html) =>{
  if(err){
    console.log('Error') ;
    throw err ;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200 ;
    res.setHeader ('Content-type' , 'text/html') ;
    res.write(html) ;
    res.end() ;
  });

  server.listen(port , hostName , ()  =>{
    console.log('Server Started on port' + port ) ;
  });

}) ;

const hostName = '127.0.0.1' ;
const port = 3000 ;
