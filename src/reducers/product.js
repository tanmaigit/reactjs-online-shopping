import { GET_PRODUCT } from "../constants/actions";

const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
	case GET_PRODUCT:
      return { products: action.payload };
    default:
      return state;
  }
};
export default productReducer;