import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/products", { name, category_id: categoryId })
            .then((response) => {
                console.log("Product created successfully:", response.data);
                setName("");
                setCategoryId("");
            })
            .catch((error) => {
                console.error("There was an error creating the product:", error);
            });
    };

    return (
        <div>
            <h2>Create New Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label>Category ID:</label>
                <input
                    type="number"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    required
                />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
