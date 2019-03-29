$(document).ready(() => {
	console.log("I'm ready");
	let tbody = $('tbody');
	downloadPlants(tbody);

	tbody.on('click','.btn', function (){
		let id = parseInt(this.dataset.id);
		console.log(id);
		$.ajax({
			url: `http://127.0.0.1:8000/plants/${id}`,
			method: 'GET',
			dataType: 'json',
		}).done(function (response){
			console.log(response.latin_name);
			console.log(response.description);
			//redirect to new page with plant details plant_details.html
			window.location.replace("http://www.w3schools.com");
		})
	});

});
function downloadPlants(tbody) {
	tbody.innerHTML = "";
	$.ajax({
		url: 'http://127.0.0.1:8000/plants/',
		method: 'GET',
		dataType: 'json'
	}).done(function (response) {

		for (let element of response) {
			let tr = document.createElement('tr');

			tr.innerHTML = `<td>${element.id}</td>
			<td>${element.name}</td>
			<td>${element.latin_name}</td>
			<td>
				<button class="btn btn-primary edit" data-id="${element.id}">
				Szczegóły</button>
			</td>`;
			tbody.append(tr);
		}
	});
}