import axios from 'axios';
import './styles.css';

let number = 1;

axios.get('http://localhost:3000/reviews').then((response) => {
  response.data.forEach((review) => {
    let result = document.createElement('p');
    result.setAttribute('class', 'review');
    result.textContent = number + ') ' + review.name + ' | ' + review.surname +
      ' | ' + review.description + ' | ' + review.mark;
    document.querySelector('.reviews').appendChild(result);
    number += 1;
  })
});
