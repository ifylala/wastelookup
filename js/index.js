console.log('Hello World');

function createNodes(element) {
	return document.createElement(element);
}

function append(parent, e1) {
	return parent.appendChild(e1);
}

function searchByText() {
	let output = [];
	let text = document.getElementById('searchText').value;
	fetch('http://localhost:3000/Search', {
			method: 'get'
		})
		.then(response => response.json())

		.then(json => {

			for (let index = 0; index < json.length; index++) {


				if (json[index].title.indexOf(text) !== -1) {
					output.push(json[index]);
				}
			}
			console.table(output);
		})
}