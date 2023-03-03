import './App.css';
// import Countries from './countries.json';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

/**
 *
 *FAIRE LE STYLING EN SE BASANT SUR LE EXAMPLE.HTML
 *
 */

function App() {
  const [countries, setCountry] = useState([]);
  const mystyle = {
    maxHeight: '90vh',
    overflow: 'scroll',
  };

  const api = 'https://ih-countries-api.herokuapp.com/countries';

  const fetchCountry = async () => {
    try {
      const raw = await fetch(api);
      const res = await raw.json();
      console.log(res);
      setCountry(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-5" style={mystyle}>
            <div className="list-group">
              {countries.map((country) => {
                return <CountriesList {...country}></CountriesList>;
              })}
            </div>
          </div>
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
