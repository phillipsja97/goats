import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import goatData from '../helpers/data/goatData';
import GoatCorral from '../components/GoatCorral/GoatCorral';
import AvailableGoats from '../components/AvailableGoats/AvailableGoats';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  takeGoat = (goatId) => {
    goatData.takeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  goatsAvailable = () => {
    const daGoats = goatData.getGoats();
    this.setState({ daGoats });
  }

  render() {
    return (
      <div className="App">
        <AvailableGoats goats={this.state.goats} />
        <GoatCorral goats={this.state.goats} freeGoat={this.freeGoat} takeGoat={this.takeGoat} />
      </div>
    );
  }
}

export default App;
