import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class AvailableGoats extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  getGoatCount = () => {
    const { goats } = this.props;
    // eslint-disable-next-line max-len
    return goats.filter((goat) => !goat.isBusy).length; // !goat.isBusy is same as saying goat.isBusy !== true;
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
