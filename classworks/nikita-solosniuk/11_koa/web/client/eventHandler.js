const submit = document.querySelector('#form');
const startHTML = submit.innerHTML;
import axios from 'axios';

const sendMessage = (e) => {
  e.preventDefault();

  const firstName = document.querySelector('#firstName').value;
  const secondName = document.querySelector('#secondName').value;
  const description = document.querySelector('#description').value;
  const mark = document.querySelector('#mark').value;

  let message = {firstName, secondName, description, mark};
  axios.post('/message', message)
    .then((response) => {
      document.location.href = 'public/messages.html';
    })
    .catch((error) => {
        submit.innerHTML = startHTML;
        document.querySelector('#'+error.response.data.details[0].context.key).style.backgroundColor = 'red';
        submit.innerHTML += `<div>${error.response.data.details[0].message}</div>`;
      document.querySelector('#firstName').value = firstName.trim() || '';
      document.querySelector('#secondName').value = secondName.trim() || '';
      document.querySelector('#description').value = description.trim() || '';
      document.querySelector('#mark').value = mark;
    })

};

submit.addEventListener('submit', sendMessage);