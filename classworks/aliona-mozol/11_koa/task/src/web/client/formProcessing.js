import axios from 'axios';

const form = document.getElementById('post-form');

const postData = (e) => {
  e.preventDefault();
  const dataFromForm = document.getElementById('post-form').elements;
    console.log(dataFromForm);
  const data = {
    name: dataFromForm['name'].value,
    surname: dataFromForm['surname'].value,
    description: dataFromForm['description'].value,
    mark: dataFromForm['mark'].value,
  };
  console.log(data);
  axios.post('http://localhost:3000/api/form-data', data)
    .then((response) => {
      console.log(response);
    });
}

form.addEventListener('submit', postData);
