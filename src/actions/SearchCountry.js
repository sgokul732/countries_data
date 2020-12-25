import axios from "axios";
export const getCountries = () => {
  return {
    type: "GET_COUNTRIES",
  };
};

export const getCountriesSuccess = (data) => {
  return {
    type: "GET_COUNTRIES_SUCCESS",
    payload: data,
  };
};

export const getCountriesFailure = (data) => {
  return {
    type: "GET_COUNTRIES_FAILURE",
    payload: data,
  };
};

export const fetchCountries = () => {
  const BASE_URL = "https://restcountries.eu/rest/v2/all";
  let URI = BASE_URL;

  return (dispatch) => {
    dispatch(getCountries());
    axios
      .get(URI)
      .then((res) => {
        const countriesData = res.data;

        dispatch(getCountriesSuccess(countriesData));
      })
      .catch((err) => {
        const countriesData = err.data;

        dispatch(getCountriesFailure(countriesData));
      });
  };
};
