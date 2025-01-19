import React, { useEffect, useState } from "react";
import { getProducts } from "../api";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => setProducts(res.data));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category ID</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;

