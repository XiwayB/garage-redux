// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";


export function fetchCar(id) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars/${id}`;
  const promise = fetch(url).then(res => res.json());
    return {
      type: FETCH_CAR,
      payload: promise
    }
}

export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(res => res.json());
    return {
      type: FETCH_CARS,
      payload: promise
    }
}
