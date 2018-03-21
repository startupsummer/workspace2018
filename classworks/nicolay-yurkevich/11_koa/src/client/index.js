import axios from 'axios';

const counter = document.getElementById('counter');
const form = document.getElementById('form');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  handleFormQuerry();
});

const handleFormQuerry = () => {
  const collection = form.elements;
  const data = {
    name: collection['name'].value,
    surname: collection['surname'].value,
    description: collection['description'].value,
    select: collection['select'].value,
  };
  axios.post('http://localhost:3000/addReview',data);
};

axios.get('http://localhost:3000/counter').then(response=>{
  counter.innerHTML = response.data;
});
