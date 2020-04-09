import React, { Component } from "react";

import { Cards, CountryPicker, Chart } from "./components";
import coronaImage from "./assets/image.png";

import { fetchData } from "./api";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    selectedCountry: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      selectedCountry: country,
    });
  };

  render() {
    const { data, selectedCountry } = this.state;
    return (
      <div className={styles.container}>
        {/* <CoronaImage /> */}
        <img src={coronaImage} alt="COVID-19" className={styles.coronaImage} />
        <Cards data={data} />
        <CountryPicker onCountryChange={this.handleCountryChange} />
        <Chart data={data} country={selectedCountry} />
      </div>
    );
  }
}

export default App;
