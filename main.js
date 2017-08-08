let container = document.getElementById('container');
let button = document.getElementById('btn');
let input = document.querySelector('input');
console.log(input);


button.addEventListener("click", function(){
  let search = "https://recipepuppyproxy.herokuapp.com/api/?q=" + input.value;
  console.log(search);

  fetch(search)
    .then(function(response) {
        response.json().then(function(data) {

          console.log(data.results);
          });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });



});


// }



// container.innerHTML += `<div id="row2"><span>hellllooo</span> <span>herro</span> <span>herro</span> <span>----</span></div>`;
// container.innerHTML +=`<div id="row3"><span>hellllo</span> <span> hero</span> <span>herro</span> <span>---</span></div>`;
