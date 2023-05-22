import { useState } from "react";
import { Link } from "react-router-dom";
import { apiURL } from "../../utils/api";
import useFetch from "../../utils/useFetch";
import CountryFilter from "../../components/Filter";
import Search from "../../components/Search";

const Country = () => {
  const [key, setKey] = useState(Math.random());

  const [url, setUrl] = useState(`${apiURL}/all`);
  const { data, isPending, error } = useFetch(url);

  const getCountryByName = (countryName) => {
    setUrl(`${apiURL}/name/${countryName}`);
  };

  const getCountryByRegion = (region) => {
    setKey(Math.random);
    setUrl(`${apiURL}/region/${region}`);
  };

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
        {isPending && !error && <h3>Loading...</h3>}
        {error && !isPending && <h3>{error}</h3>}
        {data?.map((country, index) => (
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
