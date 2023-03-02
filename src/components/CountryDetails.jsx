import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const mystyle = {
    width: '30%',
  };
  const { code } = useParams();
  // console.log(code);

  const countryFound = props.countries.find(
    (element) => element.alpha3Code === code
  );
  // console.log(countryFound.name.common);

  return (
    <div className="col-7">
      <h1>{countryFound.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={mystyle}>Capital</td>
            <td>{countryFound.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryFound.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryFound.borders.map((border) => {
                  return (
                    <li>
                      <Link to={border}>{border}</Link>
                      {console.log({ border })}
                    </li>
                  );
                })}
                {/* <li>
                  <a href="/AND">Andorra</a>
                </li> */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
