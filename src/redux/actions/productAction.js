import axiosInstance from '../helper/axios';
import { getProduct } from '../constant';

const getProductRequest = () => {
  return {
    type: getProduct.PRODUCT_REQUEST,
  };
};

const getProductSuccess = (payload) => {
  return {
    type: getProduct.PRODUCT_SUCCESS,
    payload,
  };
};

const getProductFailure = (payload) => {
  return {
    type: getProduct.PRODUCT_FAILURE,
    payload,
  };
};

export const productAction = (slug) => {
  return (dispatch) => {
    dispatch(getProductRequest());
    console.log(slug);
    axiosInstance
      .get(`/api/product/${slug}`)
      .then((response) => {
        dispatch(getProductSuccess(response.data));
        console.log(response.data);
      })
      .catch((err) => {
        dispatch(getProductFailure(err.data));
        console.log(err.data);
      });
  };
};
