import React from 'react'

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api' 

class App extends React.Component {
  // the best place to fetch the data inside the class based component is inside: componentDidMount
  state = {
    data: {}
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    // populating data with data:
    this.setState({ data: fetchedData })
  }

  render()  {
    const { data } = this.state;
    return (
      <div className={ styles.container }>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;