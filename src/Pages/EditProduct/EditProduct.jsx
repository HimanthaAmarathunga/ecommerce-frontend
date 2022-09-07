import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "../AddProduct/AddProduct.css";

export default function EditProduct() {
  const navigate = useNavigate();
  const [sku, setSku] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setSku(localStorage.getItem("SKU"));
    setProductName(localStorage.getItem("PRODUCT NAME"));
    setQuantity(localStorage.getItem("QUANTITY"));
    setProductDescription(localStorage.getItem("PRODUCT DESCRIPTION"));
    setCategory(localStorage.getItem("CATEGORY"));
    setPrice(localStorage.getItem("PRICE"));
  }, []);

// UPDATE API

  const onSubmit = (_id) => {
    axios
      .put("http://localhost:5000/api/products/" + _id, {
        sku,
        productName,
        quantity,
        productDescription,
        category,
        price,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="addProducts">
      {/* Header Section */}
      <div className="headerSection">
        <Header />
      </div>
      <div>
        <div className="PageHead col-sm-9">
          <p className="primary-titles">
            PRODUCTS{" "}
            <FontAwesomeIcon icon={faChevronRight} className="arrowIcon" />{" "}
            <a className="addProductSubHeading">Edit product</a>
          </p>
        </div>
        <div className="addProduct-form">
          {/* Update Product form */}
          <form>
            <div className="mb-3 row">
              <label className="col-sm-1 primary-text-med">SKU</label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  id="sku"
                  name="SKU"
                  required
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
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
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
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
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
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
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
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
                />
              </div>
            </div>

            <Link to={"/"}>
              {" "}
              <button
                type="submit"
                onClick={onSubmit}
                className="AddProductButton"
              >
                Save Changes
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
