import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';
import { bindActionCreators } from 'redux';

class CarsShow extends Component {

  componentWillMount() {
    if(!this.props.post) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <div className="car-item">
          <h3>{this.props.car.brand} {this.props.car.model}</h3>
          <p>Plate: {this.props.car.plate}</p>
          <p>Owner: {this.props.car.owner}</p>
          SHOWPAGE
        </div>
        <Link to="/">
          Back
        </Link>
      </div>

    )
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10)
  const car = state.cars.find(e => e.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
