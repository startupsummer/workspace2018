import axios from 'axios';

import './index.pcss';

axios.get('/reviews')
    .then((data => {
        let str = data.data.reduce((previous, current) => {
            return( previous +
              `<div>name: ${current.name}</div>

              <div>surname: ${current.surname}</div>

              <div>select: ${current.select}</div>

              <br/>`
            )
        }, '');

        document.body.innerHTML = str;
    }));
