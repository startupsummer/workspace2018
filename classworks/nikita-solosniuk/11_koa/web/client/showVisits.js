import axios from 'axios';


const showVisits = () => {
  axios.get('/showVisits')
  .then((response) => {
    document.querySelector('#visitsCount').innerHTML = `<div>Вы посетили эту страницу ${response.data} раз</div>`;
  })
};

showVisits();