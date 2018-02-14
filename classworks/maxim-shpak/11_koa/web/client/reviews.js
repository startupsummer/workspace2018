import axios from 'axios';

import './default.css';
import './reviews.css';

axios.get('/reviews-list').then((response) => {
  response.data.forEach((item, i) => {
    const reviewBlock = document.createElement('div');
    reviewBlock.classList.add('reviews-list__element');

    const title = document.createElement('p');   
    title.textContent = `${i}. ${item.firstName} ${item.lastName}, ${item.rating}`;
    title.classList.add('review-text');
    title.classList.add('review-text--title');
    reviewBlock.appendChild(title);

    const text = document.createElement('p');  
    text.textContent = item.description;
    text.classList.add('review-text');
    reviewBlock.appendChild(text);   

    document.querySelector('.reviews-list').appendChild(reviewBlock);
  })
});