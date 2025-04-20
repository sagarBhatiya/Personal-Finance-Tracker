import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Transaction from './components/Transaction';
import Income from './components/Income';
import Expenses from './components/Expenses';
function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/Transaction" element={<Transaction/>} />
      <Route path="/Income" element={<Income/>} />
      <Route path="/Expenses" element={<Expenses/>} />

    </Routes>
    </>
   );
}

export default App;