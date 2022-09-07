import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
// import { addProductSuccess } from "../../Redux/productSlice";
import { addProduct } from "../../Redux/apiCalls";

export default function AddProduct({ history }) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  // const [sku, setSku] = useState();
  // const [productName, setProductName] = useState();
  // const [quantity, setQuantity] = useState();
  // const [productDescription, setProductDescription] = useState();
  // const [category, setCategory] = useState();
  // const [price, setPrice] = useState();
  const navigate = useNavigate();
  const [values, setValues] = useState([]);

  const addProducts = useSelector((state) => state.addProducts);
  // const { productInfo} = addProducts;

  // useEffect(() => {
  //     if (productInfo) {
  //         history.push("/");
  //     }
  // }, [history, productInfo]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handlePhoto = (e) => {
      setInputs((prev) => {
          return({ ...prev, image: e.target.files[0]})
      })
  }

  // const handleValues = (e) => {
  //     setValues(e.target.value.split(","));
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(addProduct(sku, productName, quantity, productDescription, category, price));
  // // const fileName = new Date().getTime() + file.name;
  // // const storage = getStorage(app)
  // const product = { ...inputs};
  // addProduct(product, dispatch);
  // }

//   const uploadTask = inputs
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const product = { inputs };
    console.log(product);
    addProduct(product, dispatch);
    
  };

  return (
    <div className="addProducts">
      {/* Header Section */}
      <div className="headerSection">
        <Header />
      </div>
      <div>
        <div className="PageHead col-sm-9">
          <div className="primary-titles">
            PRODUCTS{" "}
            <FontAwesomeIcon icon={faChevronRight} className="arrowIcon" />{" "}
            <a className="addProductSubHeading">Add new product</a>
          </div>
        </div>
        <div className="addProduct-form">
          {/* Add Product form */}
          {/* onSubmit={handleSubmit} */}
          <form >
            <div className="mb-3 row">
              <label className="col-sm-1 primary-text-med">SKU</label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  id="sku"
                  name="SKU"
                  required
                  //   value={sku}
                  //   onChange={(e) => setSku(e.target.value)}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-1 primary-text-med">Name</label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  id="productName"
                  name="Name"
                  required
                  //   value={productName}
                  //   onChange={(e) => setProductName(e.target.value)}
                  onChange={handleChange}
                />
              </div>

              <label className="col-sm-1 right-side-fields">QTY</label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="number"
                  id="quantity"
                  name="Qty"
                  required
                  //   value={quantity}
                  //   onChange={(e) => setQuantity(e.target.value)}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3 primary-text-med">
                Product Description
              </label>
              <p className="sec-text-med">
                A small description about the product
              </p>
              <div className="col-sm-10">
                <textarea
                  className="form-control description"
                  type="textarea"
                  id="productDescription"
                  name="Product Description"
                  required
                  //   value={productDescription}
                  //   onChange={(e) => setProductDescription(e.target.value)}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-1 primary-text-med">Category</label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  id="category"
                  name="Category"
                  required
                  //   value={category}
                  //   onChange={(e) => setCategory(e.target.value)}
                  onChange={handleChange}
                />
              </div>

              <label className="col-sm-1 primary-text-med right-side-fields">
                Price
              </label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="number"
                  id="price"
                  name="Price"
                  required
                  //   value={price}
                  //   onChange={(e) => setPrice(e.target.value)}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-9 row">
              <label className="col-sm-2 primary-text-med">
                Product Images
              </label>
              <p className="sec-text-med">
                JPEG, PNG, SVG or GIF <br /> (Maximum file size 50MB)
              </p>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="file"
                  accept="image/*"
                  id="image"
                  name="Image"
                //   value={values.image}
                //   onChange={(e) => setValues({ ...values, image: e.target.value})}
                onChange={handlePhoto}
                />
              </div>
            </div>

            <button onClick={handleSubmit} className="AddProductButton">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
