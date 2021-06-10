// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";

export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(res => res.json());
    return {
      type: FETCH_CARS,
      payload: promise
    }
}
