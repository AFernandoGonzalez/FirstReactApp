import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 56.70,
      date: new Date(2022, 8, 14),
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 64.30,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e3',
      title: 'Computer',
      amount: 33.10,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e4',
      title: 'Iphone',
      amount: 52.50,
      date: new Date(2022, 7, 14),
    },
  ]

  return (
    <div >
      <h2>Lets start!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>

  );
}

export default App;
