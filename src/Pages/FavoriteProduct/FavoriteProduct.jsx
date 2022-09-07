import React from 'react';
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as starIcon } from "@fortawesome/free-regular-svg-icons";
import '../ProductList/ProductList.css';
import SearchBar from '../../Components/SearchBar/SearchBar';

export default function FavoriteProduct() {
  return (
    <div className="productList">
      <div className="headerSection">
        <Header />
      </div>
      <div>
        <div className="PageHead col-sm-9">
          <div className="primary-titles">FAVORITE PRODUCTS</div>
        </div>
        <div className="searchSection">
          <SearchBar/>
        </div>
        <div className="product-list-table">
          <table class="table">
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
              <tr>
                <th scope="row" className="sku-style">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td> <FontAwesomeIcon icon={faTrash} className="fontawesomeicons" />
                <FontAwesomeIcon icon={faPen} className="fontawesomeicons" />
               <FontAwesomeIcon icon={starIcon} className="fontawesomeicons"/>
               <FontAwesomeIcon icon={faStar} className="fontawesomeicons"/>
                </td>         
              </tr>  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
