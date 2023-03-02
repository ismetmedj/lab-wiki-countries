import './App.css';
import Countries from './countries.json';
import Navbar from './components/Navbar';
import { useState } from 'react';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

/**
 *
 *FAIRE LE STYLING EN SE BASANT SUR LE EXAMPLE.HTML
 *
 */

function App() {
  const [countries, setCountry] = useState(Countries);
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          {countries.map((country) => {
            return <CountriesList {...country}></CountriesList>;
          })}
          <Routes>
            <Route
              path=":code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
