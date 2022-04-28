function getFetch(url, callback) {
    fetch(url)
    .then((response)) => response.json())
    .then()
}


/*
fetch('data.json')
.then((response) => {
    headers.forEach()
})

fetch('issue.json')
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })
 .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
  */