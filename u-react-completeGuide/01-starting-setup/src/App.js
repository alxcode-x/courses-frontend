import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 1, title: 'Car Insurance', amount: 287.98, date: new Date(2022, 11, 22) },
    { id: 2, title: 'Life Insurance', amount: 290.00, date: new Date(2022, 11, 23) },
    { id: 3, title: 'Medical Insurance', amount: 180.14, date: new Date(2022, 11, 23) },
    { id: 4, title: 'Car Maintenance', amount: 90.12, date: new Date(2022, 12, 21) }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;