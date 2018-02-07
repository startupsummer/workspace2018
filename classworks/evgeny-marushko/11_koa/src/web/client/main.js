const sendReview = (e) => {
  e.preventDefault();
  const firstName = firstNameField.value;
  const lastName = lastNameField.value;
  const description = textarea.value;
  const rating = select.value;
  let formData = new FormData();
  let review = {firstName, lastName, description, rating};
  formData.append('review', JSON.stringify(review));
  formData.append('image', file.files[0]);
  axios.post('/api/review', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(function (response) {
    document.location.replace('/reviews.html');
  })
  .catch(function (error) {
    error.response.data.forEach(err => alert(err));
  })
}
form.addEventListener('submit', sendReview);
