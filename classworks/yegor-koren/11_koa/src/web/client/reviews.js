import axios from 'axios';

axios.get('http://localhost:3000/api/reviews')
  .then((response) => {
    const reviews = response.data.map(item => (
      `<p>Name: ${item.name}</p>
      <p>Surname: ${item.surname}</p>
      <p>Description: ${item.description}</p>
      <p>Mark: ${item.mark}</p>
      <hr/>`
    ));
    document.querySelector('.reviews').innerHTML = reviews.join('');
});
