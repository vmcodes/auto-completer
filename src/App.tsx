import React from "react";
import { Countries } from "./Countries";
import "./assets/styles.css";

const App: React.FC = () => {
  const [countries, setCountries] = React.useState<JSX.Element[] | null>(null);
  const [countryValue, setCountryValue] = React.useState<string>("");

  const selectCountry = (country: string) => {
    setCountries(null);
    setCountryValue(country);
  };

  const renderCountries = (location: string) => {
    let countryList: JSX.Element[] = [];

    Countries.forEach((country) => {
      if (country.name.toLowerCase().includes(location.toLowerCase())) {
        countryList.push(
          <div>
            <input
              key={country.code}
              value={country.name}
              onClick={() => selectCountry(country.name)}
              className="dropdown-position input-padding"
              readOnly
            />
          </div>
        );
      }
    });

    countryList.sort();

    if (location.length > 0) {
      setCountryValue(location);
      setCountries(countryList.slice(0, 5));
    } else {
      setCountryValue(location);
      setCountries(countryList.slice(0, 0));
    }
  };

  return (
    <div className="wrapper">
      <label>Country:</label>
      <div>
        <input
          value={countryValue}
          onChange={(e) => renderCountries(e.target.value)}
          className="input-padding"
        />
        {countries}
      </div>
    </div>
  );
};

export default App;
