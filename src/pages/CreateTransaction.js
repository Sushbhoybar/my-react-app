import React, { useState } from "react";
import axios from "axios";

const CreateTransaction = () => {
    const [productId, setProductId] = useState("");
    const [amount, setAmount] = useState("");
    const [transactionDate, setTransactionDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/transactions", { product_id: productId, amount, transaction_date: transactionDate })
            .then((response) => {
                console.log("Transaction created successfully:", response.data);
                setProductId("");
                setAmount("");
                setTransactionDate("");
            })
            .catch((error) => {
                console.error("There was an error creating the transaction:", error);
            });
    };

    return (
        <div>
            <h2>Create New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>Product ID:</label>
                <input
                    type="number"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    required
                />
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <label>Transaction Date:</label>
                <input
                    type="date"
                    value={transactionDate}
                    onChange={(e) => setTransactionDate(e.target.value)}
                    required
                />
                <button type="submit">Create Transaction</button>
            </form>
        </div>
    );
};

export default CreateTransaction;
