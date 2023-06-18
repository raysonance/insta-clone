export const UPDATE_PRODUCT = "UPDATE_PRODUCT";


export const addProduct = (name, image, price, dispatch) =>
  dispatch({
    type: UPDATE_PRODUCT,
    payload: {
      name: name,
      image: image,
      price: price
    },
  });
