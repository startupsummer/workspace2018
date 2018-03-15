import axios from 'axios';

axios.get('http://localhost:3000/api/counter')
  .then((response) => {
    document.querySelector('.counter')
      .textContent = 'Sessions\'s counter: ' + response.data;
  });

const form = document.querySelector('.form');

  const postRewiew = (e) => {
    e.preventDefault();
    const formData = form.elements;
    const data = {
      name: formData['name'].value,
      surname: formData['surname'].value,
      description: formData['message'].value,
      mark: formData['value'].value,
    };
    axios.post('http://localhost:3000/api/reviews', data);
      // .then((response) => {
      //   document.querySelector('.all-right')
      //     .textContent = response.data;
      //     // document.location.replace('/reviews.html');
      // });
  }

  form.addEventListener('submit', postRewiew);
