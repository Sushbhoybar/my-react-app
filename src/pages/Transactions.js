import React, { useEffect, useState } from "react";
import { getTransactions } from "../api";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions().then((res) => setTransactions(res.data));
    }, []);

    return (
        <div>
            <h1>Transactions</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product ID</th>
                        <th>Amount</th>
                        <th>Transaction Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.product_id}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.transaction_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
