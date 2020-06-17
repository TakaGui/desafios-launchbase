const user = {
  name: 'Taka',
  transactions: [], //credit or debit
  balance: 0,
};

function createTransaction(transaction) {
  user.transactions.push(transaction);

  if (transaction.type === 'credit') {
    user.balance += transaction.value;
  } else if (transaction.type === 'debit') {
    user.balance -= transaction.value;
  }
}

function getHigherTransactionByType(typeTransaction) {
  let higherValue = 0;
  let higherTransation = [];

  for (let i = 0; i < user.transactions.length; i++) {
    if (
      (user.transactions[i].type === typeTransaction) && 
      (higherValue < user.transactions[i].value)
    ) {
      higherValue = user.transactions[i].value;
      higherTransation = user.transactions[i];
    }
  }

  console.log(higherTransation);
}

function getAverageTransactionValue() {
  let sum = 0;
  let average = 0;

  for (let transaction of user.transactions) {
    sum += transaction.value;
  }

  average = sum / user.transactions.length;
  console.log(average);
}

function getTransactionsCount() {
  let credit = 0;
  let debit = 0;

  for (let transaction of user.transactions) {
    if (transaction.type === 'credit') {
      credit++;
    } else if (transaction.type === 'debit') {
      debit++;
    }
  }

  const transactionCount = { credit, debit };

  console.log(transactionCount);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }