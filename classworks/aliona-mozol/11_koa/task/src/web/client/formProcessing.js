import postRequest from './api/api.client';

function postData() {
  const dataFromForm = dociment.getElementById('post-form').elements;
  const data = {
    name: dataFromForm['name'],
    surname: dataFromForm['surname'],
    description: dataFromForm['description'],
    mark: dataFromForm['mark'],
  };
  postRequest('/form-data', data)
    .then((response) => {
      console.log(response);
    });
}
