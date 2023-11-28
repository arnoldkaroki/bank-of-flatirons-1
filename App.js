// App.js
import React from 'react';
import TransactionList from './TransactionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank Transaction App</h1>
      </header>
      <main>
        <TransactionList />
      </main>
    </div>
  );
}

export default App;
