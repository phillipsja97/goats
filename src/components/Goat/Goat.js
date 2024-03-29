import React from 'react';
import PropTypes from 'prop-types';
import goatData from '../../helpers/data/goatData';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
    takeGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  takeGoatEvent = (e) => {
    const { takeGoat, goat } = this.props;
    e.preventDefault();
    takeGoat(goat.id);
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card">
        <img src={goat.imgUrl} className="card-img-top" alt={goat.name}/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          <button className="btn btn-danger" onClick={this.freeGoatEvent}>Free Me</button>
          <button className="btn btn-danger" onClick={this.takeGoatEvent}>Take Me</button>
        </div>
      </div>
    );
  }
}

export default Goat;
