let container = document.getElementById('container');
let button = document.getElementById('btn');


// button.addEventListener("click", function(){
  // console.log("value", input.value);
  //
  // console.log(search);

function clicky() {
  let input = document.querySelector('input');
container.innerHTML ='';
  let search = "https://recipepuppyproxy.herokuapp.com/api/?q=" + input.value;

  fetch(search)
  .then(function(response) {
    response.json().then(function(data) {

      for (var i = 0; i < 8; i++ ){
        if (data.results[i].thumbnail === ""){
          container.innerHTML += `<div id="row2"><h3><a href="${data.results[i]}.href}">${data.results[i].title}</a>"</h3><br>
          <img src="http://via.placeholder.com/100x100"></div>
          `
        } else {
          container.innerHTML += `<div id="row2>"<h3><a href="${data.results[i]}.href}">${data.results[i].title}</a></h3><br>
          <img src="${data.results[i].thumbnail}"></div>
          `

        }


      }
      console.log(search);
      console.log(data.results);
    });
  }
)
.catch(function(err) {
  console.log("Fetch Error :-S", err);
});


console.log("doneeeeeeee");

}
// });


// }



// container.innerHTML += `<div id="row2"><span>hellllooo</span> <span>herro</span> <span>herro</span> <span>----</span></div>`;
// container.innerHTML +=`<div id="row3"><span>hellllo</span> <span> hero</span> <span>herro</span> <span>---</span></div>`;
