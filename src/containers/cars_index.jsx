import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.fetchCars();
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchCars = () => {
    this.props.fetchCars("bobs");
  }

  render () {
    return (
      <div className="cars-list">
          {
            this.props.cars.map((car) => {
              return car.owner
            })
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
