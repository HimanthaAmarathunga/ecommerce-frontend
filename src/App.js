import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import AddProduct from "./Pages/AddProduct/AddProduct";
import FavoriteProduct from "./Pages/FavoriteProduct/FavoriteProduct";
import ProductList from "./Pages/ProductList/ProductList";
import EditProduct from "./Pages/EditProduct/EditProduct";
import SearchProduct from "./Pages/SearchProduct/SearchProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct" element={<EditProduct />} />
        <Route path="/favoriteProduct" element={<FavoriteProduct />} />
        <Route path="/searchProduct" element={<SearchProduct />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
