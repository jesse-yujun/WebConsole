

var hbase = require('hbase');
var assert= require('assert');
//var client = hbase({host:'localhost', port:8090});


//   var client = new hbase.Client({host:'localhost', port:'8090'});
var test = hbase({host:'localhost', port:'8090'}).table('test').scan();
for(var obj in test){
console.log(obj);
}
return;
//console.log(hbase);
//console.log(test); return;
  // client.getTables(function(err, tables){
//	console.log(tables);          
  // });

var row = client.getTable('test').getRow('r1');
console.log(row);
row.exists('cf:a',function(err,exists){
	if(exists){
		this.get('cf:a', function(err,value){
			console.log('the value=' + value);
		});	
	}

});
