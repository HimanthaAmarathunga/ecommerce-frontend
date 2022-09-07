import React from 'react'
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function SearchBar() {
  return (
    <div className="search-product">
    <div className="row">
      <div className="col-sm-4">
        <input className="search-Section" type="text" placeholder="     Search for products"/>
        <button className="searchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />{" "}
          Search
        </button>
        </div>
        <div className="col-sm-4 newProduct">
          <Link to={"/addProduct"}><button className="new-product">New Product</button></Link>
        </div>
        <div className="col-sm-2">
          <button className="favoriteProducts">
          <Link to={"/favoriteProduct"}><FontAwesomeIcon icon={faStar} size="2x" className="favIcon" /></Link>
          </button>
        </div>
    </div>
  </div>
  )
}
