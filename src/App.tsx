import React from "react";
import { Countries } from "./Countries";
import "./assets/styles.css";

const App: React.FC = () => {
  const [country, setCountry] = React.useState<JSX.Element[] | null>(null);
  const [countryValue, setCountryValue] = React.useState<string>("");

  const selectCountry = (country: string) => {
    setCountry(null);
    setCountryValue(country);
  };

  const renderCountries = (country: string) => {
    let countryList: JSX.Element[] = [];

    Countries.forEach((x) => {
      if (x.name.toLowerCase().includes(country.toLowerCase())) {
        countryList.push(
          <div>
            <input
              value={x.name}
              onClick={() => selectCountry(x.name)}
              className="dropdown-position input-padding"
            />
          </div>
        );
      }
    });

    countryList.sort();

    if (country.length > 0) {
      setCountryValue(country);
      setCountry(countryList.slice(0, 5));
    } else {
      setCountryValue(country);
      setCountry(countryList.slice(0, 0));
    }
  };

  return (
    <div className="wrapper">
      <label>Country:</label>
      <div>
        <br />

        <input
          value={countryValue}
          onChange={(e) => renderCountries(e.target.value)}
          className="input-padding"
        />
        {country}
      </div>
    </div>
  );
};

export default App;
