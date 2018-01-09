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
