import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Transactions from "./pages/Transactions";
import CreateCategory from "./pages/CreateCategory";
import CreateProduct from "./pages/CreateProduct";
import CreateTransaction from "./pages/CreateTransaction";

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/categories">Categories</Link> |{" "}
                <Link to="/products">Products</Link> |{" "}
                <Link to="/transactions">Transactions</Link> |{" "}
                <Link to="/create-category">Create Category</Link> |{" "}
                <Link to="/create-product">Create Product</Link> |{" "}
                <Link to="/create-transaction">Create Transaction</Link>
            </nav>
            <Routes>
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/create-category" element={<CreateCategory />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/create-transaction" element={<CreateTransaction />} />
            </Routes>
        </Router>
    );
};

export default App;
