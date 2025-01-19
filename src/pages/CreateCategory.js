import React, { useState } from "react";
import axios from "axios";

const CreateCategory = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/categories", { name })
            .then((response) => {
                console.log("Category created successfully:", response.data);
                setName("");
            })
            .catch((error) => {
                console.error("There was an error creating the category:", error);
            });
    };

    return (
        <div>
            <h2>Create New Category</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">Create Category</button>
            </form>
        </div>
    );
};

export default CreateCategory;
