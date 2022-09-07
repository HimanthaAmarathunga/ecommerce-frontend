import { faStar as starIcon } from "@fortawesome/free-regular-svg-icons";
import { faPen, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./ProductList.css";

export default function ProductList() {
  const [APIdata, setAPIData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    let { sku, productName, quantity, productDescription, category, price } =
      data;
    localStorage.setItem("SKU", sku);
    localStorage.setItem("PRODUCT NAME", productName);
    localStorage.setItem("QUANTITY", quantity);
    localStorage.setItem("PRODUCT DESCRIPTION", productDescription);
    localStorage.setItem("CATEGORY", category);
    localStorage.setItem("PRICE", price);
  };

// GET PRODUCT LIST API

  const getData = () => {
    axios.get("http://localhost:5000/api/products").then((getData) => {
      setAPIData(getData.data);
    });
  };

// DELETE API

  const onDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "ARE YOU SURE?",
        text: "You will not be able to undo this action if you Proceed!",
        icon: "warning",
        iconColor: "red",
        showCancelButton: true,
        confirmButtonText: "Yes",
        confirmButtonColor: "#001EB9",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted",
            "Item has been deleted",
            "success"
          );
          axios.delete("http://localhost:5000/api/products/" + _id).then(() => {
            getData();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled");
        }
      });
  };

  const changeIcon = (icon) => {
    this.setState(
      <FontAwesomeIcon icon={faStar} className="fontawesomeicons" />
    );
  };

  return (
    <div className="productList">
      <div className="headerSection">
        <Header />
      </div>
      <div>
        <div className="PageHead col-sm-9">
          <div className="primary-titles">PRODUCTS</div>
        </div>
        <div className="searchSection">
          <SearchBar />
        </div>
        <div className="product-list-table">
          <table className="table">
            <thead>
              <tr className="table-heading">
                <th scope="col">SKU</th>
                <th scope="col">IMAGE</th>
                <th scope="col">PRODUCT NAME</th>
                <th scope="col">PRICE</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {APIdata.map((data) => {
                return (
                  <tr>
                    <th scope="row" className="sku-style">
                      {data.sku}
                    </th>
                    <td>Mark</td>
                    <td>{data.productName}</td>
                    <td>${data.price}.00</td>
                    <td>
                      {" "}
                      <Link to={"/"}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => onDelete(data._id)}
                          className="fontawesomeicons"
                        />
                      </Link>
                      <Link to={"/editProduct"}>
                        <FontAwesomeIcon
                          icon={faPen}
                          onClick={() => setData(data)}
                          className="fontawesomeicons"
                        />
                      </Link>
                      <Link to={"/"}>
                        <FontAwesomeIcon
                          icon={starIcon}
                          onClick={() => changeIcon(this)}
                          className="fontawesomeicons"
                        />
                      </Link>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="fontawesomeicons"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
