import React from "react";
import "./styles.css";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPick/CountryPick";
import Chart from "./components/Chart/Chart";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
export default App;
