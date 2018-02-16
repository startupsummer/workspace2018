import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export async function getReviews() {
  try {
    const { data } = await axios({
      method: 'get',
      url: '/reviews',
    });

    return data;
  } catch (err) {
    //return err.response.data;
  }
}

export async function createReview(values) {
  try {
    const { data } = await axios({
      method: 'post',
      url: '/reviews',
      data: values,
    });

    return data;
  } catch (err) {
    throw err.response.data;
  }
}

export async function getReviewsCount() {
  try {
    const { data } = await axios({
      method: 'get',
      url: '/counter',
    });

    return data;
  } catch (err) {
    //return err.response.data;
  }
}
