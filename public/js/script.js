/*fetch(`../api/`)
.then(res => res.json())
.then(trab => {
    for (let i of trab) {
        console.log(i)
    }
}

)
*/
const URL_TO_FETCH = '../api/'; fetch(URL_TO_FETCH)
.then(function(response) { 
  response.text()
  .then(function(result){ 
    console.log(result); 
  })
})
.catch(function(err) { console.error(err); });