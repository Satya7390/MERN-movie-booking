import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <Header/>
     <section>
      <Routes>
        <Route path="/movies" element={} />
      </Routes>
     </section>
    </div>
  );
}

export default App;
