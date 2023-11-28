import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BankOfFlatiron = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:8001/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: 0,
    });
  };

  const handleSort = (field) => {
    setSortBy(field);
  };

  const handleDelete = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = sortBy
    ? [...filteredTransactions].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    : filteredTransactions;

  return (
    <div>
      <h2>Bank Of Flatiron - Recent Transactions</h2>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('date')}>Date</th>
            <th onClick={() => handleSort('description')}>Description</th>
            <th onClick={() => handleSort('category')}>Category</th>
            <th onClick={() => handleSort('amount')}>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a New Transaction</h2>
      <form>
        <label>Date:</label>
        <input type="text" name="date" value={newTransaction.date} onChange={handleInputChange} />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={newTransaction.category}
          onChange={handleInputChange}
        />

        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default BankOfFlatiron;
