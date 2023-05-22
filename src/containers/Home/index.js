import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiURL } from "../../utils/api";
import CountryFilter from "../../components/Filter";
import Search from "../../components/Search";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [key, setKey] = useState(Math.random());

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}all`);
      if (!res.ok) throw new Error("could not fetch the data.....");
      const data = await res.json();
      setCountry(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}name/${countryName}`);
      if (!res.ok) throw new Error("could not find the country....");
      const data = await res.json();
      setCountry(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const getCountryByRegion = async (region) => {
    try {
      const res = await fetch(`${apiURL}region/${region}`);
      if (!res.ok) throw new Error("could not find the region...");
      const data = await res.json();
      setCountry(data);
      setKey(Math.random);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all_country">
      <div className="top_country">
        <div className="search">
          <Search key={key} onSearch={getCountryByName} />
        </div>
        <div className="filter">
          <CountryFilter onSelect={getCountryByRegion} />
        </div>
      </div>
      <div className="bottom_country">
        {loading && !error && <h3>Loading...</h3>}
        {error && !loading && <h3>{error}</h3>}
        {country?.map((country, index) => (
          <Link key={index} to={`/country/${country.name.common}`}>
            <div className="country_card">
              <div className="country_img">
                <img src={country.flags.png} alt={country.name.common} />
              </div>
              <h3>{country.name.common}</h3>
              <h6>Capital : {country.capital}</h6>
              <h6>Population : {country.population.toLocaleString("en-US")}</h6>
              <h6>Region : {country.region}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Country;
