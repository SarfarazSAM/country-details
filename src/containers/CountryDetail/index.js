import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../../utils/api";
import { useHistory } from "react-router-dom";
import "./CountryDetail.css";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { countryName } = useParams();

  let history = useHistory();

  useEffect(() => {
    const getCountryDetail = async () => {
      try {
        const res = await fetch(`${apiURL}name/${countryName}`);
        if (!res.ok) throw new Error("could not connect to server....");
        const data = await res.json();
        setCountry(data);
        setLoading(false);
        // console.log(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getCountryDetail();
  }, [countryName]);

  return (
    <div className="container">
      <button onClick={() => history.goBack()}>Back</button>
      {loading && !error && <h3>Loading...</h3>}
      {error && !loading && <h3>{error}</h3>}
      {country?.map((country, index) => (
        <div className="country-detail" key={index}>
          <div className="img">
            <img src={country.flags.png} alt={country.name.comman} />
          </div>
          <div className="info-right">
            <h1>{country.name.common}</h1>
            <p>Captial : {country.capital}</p>
            <p>Population : {country.population.toLocaleString("en-US")}</p>
            <p>Region : {country.region}</p>
            <p>Sub Region : {country.subregion}</p>
            <p>Independent : {country.independent.toString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
