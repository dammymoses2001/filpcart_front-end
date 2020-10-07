import { combineReducers } from 'redux';
import CategoryReducer from './categoryReducer';
import ProductReducer from './productReducer';

const rootReducer = combineReducers({
  category: CategoryReducer,
  getSlugProduct: ProductReducer,
});

export default rootReducer;
