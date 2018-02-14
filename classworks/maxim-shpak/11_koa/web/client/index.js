import axios from 'axios';

import './default.css';
import './interview.css';

const holidaysForm = document.forms["holidays-form"];

holidaysForm.onsubmit = (event) => {
    event.preventDefault();
    sendFormData();
};

const sendFormData = () => {
  const formData = {
    firstName: holidaysForm.elements['first-name-input'].value,
    lastName: holidaysForm.elements['last-name-input'].value,
    description: holidaysForm.elements['description-textarea'].value,
    rating: holidaysForm.elements['rating-select'].value,
  };
  axios.post('/api/holidays-form-data', formData)
    .then((response) => {
      alert(response.data);
      [].forEach.call(holidaysForm.elements, item => item.value = "");
    })
    .catch(error => alert(error.response.data))
};

axios.get('/session-counter')
  .then((response) => {
    document.querySelector('.session-counter')
      .textContent = 'Amount of sessions: ' + response.data;
  });
