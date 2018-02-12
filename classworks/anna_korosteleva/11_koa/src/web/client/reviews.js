import axios from 'axios';

axios.get('/reviews')
    .then((data => {
        let str = new String();
        data.data.forEach(data => {
            console.log(data)
            str += `<div>name ${data.name}</div>
        <div>surname ${data.surname}</div>
        <div>points ${data.number}</div>
        </br>
        </br>
        </br>`
        });
        document.body.innerHTML = str;
    }));

