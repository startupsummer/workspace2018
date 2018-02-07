function updateCounter(counter) {
  document.querySelector('.counter').textContent = 'Число заходов ' + counter;
}

var form = document.querySelector(".form");

document.querySelector('.submit').addEventListener("click", function () {
  event.preventDefault();
    console.log({
      name: form.name.value,
      surname: form.surname.value,
      descr: form.descr.value,
      number: form.number.value,
    });
   axios.post('http://localhost:3000/postForm', {
     name: form.name.value,
     surname: form.surname.value,
     descr: form.descr.value,
     number: form.number.value,
   })

});

axios.get('http://localhost:3000/count')
  .then(({ data }) => updateCounter(data));