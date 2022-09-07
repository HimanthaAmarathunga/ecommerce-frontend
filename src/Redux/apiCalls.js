import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productSlice";
import { publicRequest } from "../requestMethods";

// GET PRODUCTS API

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

// DELETE PRODUCT API

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
      const res = await publicRequest.delete("/" + id)
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// UPDATE PRODUCT API
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// ADD PRODUCT API
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await publicRequest.post("/add", product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
