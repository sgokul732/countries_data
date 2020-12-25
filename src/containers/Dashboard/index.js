import React, { useState, useEffect } from "react";
import SearchCountry from "../../components/SearchCountry";
import { connect } from "react-redux";
import CountryList from "../../components/CountryList";
import "./style.css";
import { fetchCountries } from "../../actions/SearchCountry";
const DashBoard = (props) => {
  const { getCountries, loading, error, countries } = props;
  const [search, setKeyword] = useState("");
  const [filterData, setFilterData] = useState([]);
  const filterCountries = (key) => {
    let newData =countries;
    if (key && countries) {
      newData = countries.filter((entry) =>
        entry.name.toLowerCase().startsWith(key.toLowerCase())
      );
     
    }
    setFilterData( newData );
  };

  useEffect(() => {
    filterCountries(search);
  }, [search,countries]);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="list-card">
      <SearchCountry setKeyword={setKeyword} search={search} />
      <CountryList data={filterData} loading={loading} error={error} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(fetchCountries()),
  };
};
const mapStateToProps = (state) => {
  return {
    countries: state.GetCountriesReducer.data,
    loading: state.GetCountriesReducer.loading,
    error: state.GetCountriesReducer.error,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
