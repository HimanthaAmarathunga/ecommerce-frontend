import React from "react";
import "./SearchProduct.css";
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../Components/SearchBar/SearchBar";

export default function SearchProduct() {
  return (
    <div className="searchProductResults">
      <div className="headerSection">
        <Header />
      </div>
      <div>
        <div className="PageHead col-sm-9">
          <div className="primary-titles">PRODUCTS</div>
        </div>
        <div className="searchSection">
          <SearchBar/>
        </div>
        <div className="sec-titles">Count results found for 'Object'</div>
        <div className="search-results-table">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row" className="sku-result-style">1<br/>
                <td className="product-name-result">Product Name</td><br/>
                <td className="description-result">Description</td>
                </th>
                
                <td>
                  <br/>
               <FontAwesomeIcon icon={faChevronRight} className="chevron-right-icon"/>
                </td> 
                
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
