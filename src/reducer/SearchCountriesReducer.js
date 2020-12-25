export const GetCountriesReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        loading: true,
        data: [],
        error: "",
      };
    case "GET_COUNTRIES_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "GET_COUNTRIES_FAILURE":
      return {
        loading: false,
        data: [],
        error: "error",
      };
    default:
      return state;
  }
};
