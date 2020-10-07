import { category } from '../constant';
import axiosInstance from '../helper/axios';

const categoryRequest = () => {
  return {
    type: category.CATEGORY_REQUEST,
  };
};

const categorySuccess = (payload) => {
  return {
    type: category.CATEGORY_SUCCESS,
    payload,
  };
};

const categoryFailure = (payload) => {
  return {
    type: category.CATEGORY_FAILURE,
    payload,
  };
};

export const categoryAction = () => {
  return (dispatch) => {
    dispatch(categoryRequest());
    axiosInstance
      .get('/api/category/getCategories')
      .then((response) => {
        console.log(response.data.data);
        dispatch(categorySuccess(response.data.data));
      })
      .catch((err) => {
        dispatch(categoryFailure(err.data));
        console.log(err.data);
      });
  };
};
