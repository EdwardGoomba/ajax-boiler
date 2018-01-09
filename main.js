// POST

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
}
xhr.open('POST', url);
xhr.send(data);

// jQuery GET request

$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'GET',
  dataType: 'json',
  success(response) {
  	console.log(response);
	},
  error(jqXHR, status, errorThrown) {
    console.log(jqXHR);
  }
});

// jQuery POST request
$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'POST',
  data: JSON.stringify({id: 200}),
  dataType: 'json',
  success(response) {
    console.log(response);
  },
  error(jqXHR, status, errorThrown) {
    console.log(jqXHR);
  }
});

// fetch get request

fetch('https://api-to-call.com/endpoint').then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Request failed!');
	},
	networkError => {
		console.log(networkError.message);
	}
).then(jsonResponse => jsonResponse);

// fetch post request

fetch('https://api-to-call.com/endpoint', {
	method: 'POST',
	body: JSON.stringify({
		id: '200'
	})
}).then(response => {
	if (response.ok) {
		return response.json();
	}
	throw new Error('Request failed!');
}, networkError => console.log(networkError.message)).then(jsonResponse => jsonResponse);
