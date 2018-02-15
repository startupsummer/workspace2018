import axios from 'axios';

axios.get('/reviews')
    .then((data => {
        let str = data.data.reduce((prev, curr) => {
            return( prev + `<div>name ${curr.name}</div>
            <div>surname ${curr.surname}</div>
            <div>points ${curr.number}</div>
            </br>
            </br>
            </br>`)
        }, '');
        document.body.innerHTML = str;
    }));

