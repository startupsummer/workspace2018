import axios from 'axios';

axios.get('/reviews')
 .then(res => {
    res.data.map(review => {
      var div = document.createElement('div');
      div.innerHTML = `<h2> First Name: ${review.firstName}<br> Last Name: ${review.lastName} </h2> <h2> Description:</h2> <h3>${review.description}</h3> <p> Rating: ${review.rating}</p> `;
      document.body.insertBefore(div, document.body.lastChild);
    })
 });
