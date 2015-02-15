
var thrift = require('thrift');
var hello = require('./HelloWorld.js');
var ttypes= require('./helloworld_types');
var connection = thrift.createConnection('localhost', 9090);

var client = thrift.createClient(hello, connection);

connection.on('error', function(err){
	console.error(err);
});

console.log(client.say('i am jesse').toString());
//console.log(hbase);
//console.log(test); return;
  // client.getTables(function(err, tables){
//	console.log(tables);          
  // });


