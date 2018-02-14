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
.then(res => {
  document.querySelector('.counter').textContent = 'Views ' + res.data;
}
)
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
