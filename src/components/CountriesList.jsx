import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const mystyle = {
    maxHeight: '90vh',
    overflow: 'scroll',
  };

  return (
    <div className="col-5" style={mystyle}>
      <div className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to={props.alpha3Code}
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${props.alpha2Code.toLowerCase()}.png`}
            height={15}
            alt="flag"
          />
          {props.name.common}&nbsp;
        </Link>
      </div>
    </div>
  );
};

export default CountriesList;
