import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greetings';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
