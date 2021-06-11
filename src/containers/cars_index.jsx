import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.fetchCars();
  }

  fetchCars = () => {
    this.props.fetchCars("bobs");
  }

  render () {
    return (
      <div>
        <div className="cars-new">
        </div>
        <div className="cars-list">
            {
              this.props.cars.map((car) => {
                return (
                  <Link to={`/cars/${car.id}`} key={car.id}>
                    <div className="car-item">
                      <h3>{car.brand} {car.model}</h3>
                      <p>Plate: {car.plate}</p>
                      <p>Owner: {car.owner}</p>
                    </div>
                  </Link>
                  )
              })
            }
        </div>
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
