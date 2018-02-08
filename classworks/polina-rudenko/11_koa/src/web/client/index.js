import './styles.css'
import axios from 'axios';

axios.get('/counter')
 .then(res => {
   document.querySelector('.counter')
     .textContent = 'Number of sessions: ' + res.data;
 });

const form = document.getElementById('post-form');

const postData = (event) => {
  event.preventDefault();
  const dataFromForm = document.getElementById('post-form').elements;
  const data = {
    firstName : dataFromForm.firstNameField.value,
    lastName : dataFromForm.lastNameField.value,
    description : dataFromForm.textarea.value,
    rating : dataFromForm.select.value,
  }
  console.log(data);

  axios.post('/api/form-data', data)
    .then((response) => {
     console.log("super");
    });
}


form.addEventListener('submit', postData);
