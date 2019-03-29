$(document).ready(() => {
	console.log("I'm ready");
	let tbody = $('tbody');
	downloadPlantDetails(tbody);

});
function downloadPlantDetails(tbody) {
    tbody.innerHTML = "";
    var id = getUrlVars()['id'];
	$.ajax({
		url: `http://127.0.0.1:8000/plants/1`,
		method: 'GET',
		dataType: 'json'
	}).done(function (response) {

	    let div1 = document.createElement('div');
	    let div2 = document.createElement('div');
	    let div3 = document.createElement('div');

	    div1.innerHTML = `Name: ${response.name}`;
	    div2.innerHTML = `Latin: ${response.latin_name}`;
	    div3.innerHTML = `Description: ${response.description}`;

	    tbody.append(div1);
	    tbody.append(div2);
	    tbody.append(div3);

	});
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}