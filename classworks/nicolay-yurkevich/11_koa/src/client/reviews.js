import axios from 'axios';
const divContainer = document.getElementById('reviews');
console.log(divContainer);
axios.get('http://localhost:3000/reviewsList')
     .then(response => {
      let html = response.data.reduce((previous, current ) => ( previous+
          `<div>name: ${current.name}</div>
          <div>surname: ${current.surname}</div>
          <div>select: ${current.select}</div>
          <br/><br/>`
        ),'');
      console.log(html);
      divContainer.innerHTML = html;
     });
