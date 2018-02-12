import axios from 'axios';

axios.get('http://localhost:3000/reviews')
  .then( response => response)
  .then(({ data }) => data.forEach( item => {
      document.querySelector('.reviews').appendChild(createReview(item));
    }
  ));

  function createReview(data) {
    let result = document.createElement('p');
    result.setAttribute('class', 'review');
    result.textContent = data.name + ' | ' + data.surname + ' | ' + data.number + ' | ' + data.descr;
    return result;
  }
