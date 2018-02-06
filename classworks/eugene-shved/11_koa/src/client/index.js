import axios from 'axios';

import './index.pcss';

const form = document.getElementById("form");

form.onsubmit = (event) => {
    event.preventDefault();
    sendFormData();
};



const sendFormData = () => {
  const formData = document.getElementById('form').elements;
  let data = new FormData();

  data = {
    name: formData['name'].value,
    surname: formData['surname'].value,
    description: formData['description'].value,
    select: formData['select'].value,
  };
  axios.post('/form', data);
};

axios.get('/counter')
  .then((response) => {
    document.getElementById('counter')
      .textContent = "Counter:" + response.data;
  });
