import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer } from './productReducer';
import { addCart } from './cartReducer';
import { loginReducer } from './loginReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    carts: addCart,
    user: loginReducer,
});

export default reducers;
