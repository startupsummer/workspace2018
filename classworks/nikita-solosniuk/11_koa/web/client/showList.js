import axios from 'axios';

const showList = () => {
  axios.get('/messageList')
  .then((response) => {
    let body = response.data.map((message) => {
      return `
                <div class="review">
                    <div class="name">
                        <h1>${message.secondName} ${message.firstName}</h1>
                    </div>
                <div class="description"><h2>${message.description.toString()}</h2></div>
                <div class="rating"><h3>${message.mark}</h3></div>
                <hr>
                </div>`;
    }).join('');
    document.querySelector('#messageList').innerHTML = body;
  })
};

showList();