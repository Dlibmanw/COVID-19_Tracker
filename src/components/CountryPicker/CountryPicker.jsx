import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]); 

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
  }, [setFetchedCountries]);
       
  return (
    // from @material-ui:
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {/* the following line will populate the drop down menu with 187 countries(options) */}
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;