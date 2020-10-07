import { getProduct } from '../constant';

const initialState = {
  loading: false,
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
    under30k: [],
  },
  error: null,
};

const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProduct.PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case getProduct.PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        productsByPrice: { ...action.payload.productsByPrice },
      };

    case getProduct.PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getProductReducer;
