
function initPlatform(){
	var ctx = document.getElementById("chart-area").getContext("2d");
	window.myPie = new Chart(ctx).Pie(pieData);
	var ctx2 = document.getElementById("chart-area2").getContext("2d");
	//window.myPie = new Chart(ctx2).Pie(pieData);
	/*	
	$.getJSON("http://localhost:8888/platform", function(data){
		alert(data);
		window.myPie = new Chart(ctx2).Pie(data);
	});
	*/
	$.ajax({
		type: 'get',
		url: "http://localhost:3000/platform",
		data: "",
		dataType: 'json'
		}).done(function(data){
			//alert('ok');
			//alert(data);
			window.myPie = new Chart(ctx2).Pie(data);
		});
/*	
	client.getTables(function(err, tables){
		alert(tables);
	});
*/
};


$(document).ready(function(){

	$('#platform').click(function(){
		$('#titleDiv').hide();
		$('#homeContent').hide();
		$('#searchDiv').show();
		$('#platformContent').show();
		initPlatform();
	});

	$('#home').click(function(){
		$('#titleDiv').show();
		$('#homeContent').show();
		$('#searchDiv').hide();
		$('#platformContent').hide();
	});

});
