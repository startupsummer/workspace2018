import axios from 'axios';

const form = document.querySelector(".form");

document.querySelector('.submit').addEventListener("click", function () {
  event.preventDefault();
   axios.post('/reviews', {
     name: form.name.value,
     surname: form.surname.value,
     description: form.description.value,
     number: form.number.value,
   })
});

axios.get('/views')
.catch(function (error) {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
 })
.then(res => {
  document.querySelector('.counter').textContent = 'Views ' + res.data;
}
//   {
//   res.map(review => {
//     var div = document.createElement('div');
//     div.innerHTML = `<h2> First Name: ${review.firstName}<br> Last Name: ${review.lastName} </h2> <h2> Description:</h2> <h3>${review.description}</h3> <p> Rating: ${review.rating}</p> `;
//     document.body.insertBefore(div, document.body.lastChild);
//   })
// }
);