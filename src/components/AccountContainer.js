import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({handleDeleteTransaction}) {
	 //fetch data
  //GET request
  const [transactions, listTransactions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((transacs) => listTransactions(transacs))
      .catch((err) => console.log(err));
  }, []);

  function handleAddForm(newForm) {
    listTransactions([...transactions, newForm]);
  }

  

  function handleSearch(e) {
    listTransactions((transactions) => {
      return transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(e.target.value.toLowerCase());
      });
    });
  }
	return (
		<div>
			<Search handleSearch={handleSearch} />
			<AddTransactionForm
				handleAddTransaction={handleAddForm}
				transactions={transactions}
			/>
			<TransactionList
				transactions={transactions}
				
			/>
		</div>
	);
}

export default AccountContainer;