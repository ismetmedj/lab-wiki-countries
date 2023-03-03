import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <Link
      className="list-group-item list-group-item-action"
      to={`/${props.alpha3Code}`}
    >
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${props.alpha2Code.toLowerCase()}.png`}
        height={15}
        alt="flag"
      />
      {props.name.common}&nbsp;
    </Link>
  );
};

export default CountriesList;
