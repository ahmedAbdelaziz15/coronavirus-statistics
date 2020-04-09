import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ onCountryChange }) => {
  const [countires, setCountries] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedCountiesData = await fetchCountries();
      setCountries(fetchedCountiesData);
    })();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value="">GLobal</option>
        {countires &&
          countires.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
