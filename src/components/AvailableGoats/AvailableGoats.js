import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class AvailableGoats extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  getGoatCount = () => {
    const { goats } = this.props;
    return goats.filter((goat) => !goat.isBusy).length;
  }

  render() {
    return (
      <div className="card">
        <h4>{this.getGoatCount()} Goats Available</h4>
      </div>
    );
  }
}

export default AvailableGoats;
