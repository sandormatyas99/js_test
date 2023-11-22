var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
const fs = require('fs');

fs.writeFile('message.txt', 'Created file', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
function f1(){
fs.appendFile('message.txt', ' data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});}
setTimeout(f1, 10000);
}).listen(8080);
