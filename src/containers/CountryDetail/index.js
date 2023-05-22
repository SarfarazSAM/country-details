import { useParams } from "react-router-dom";
import { apiURL } from "../../utils/api";
import { useHistory } from "react-router-dom";
import "./CountryDetail.css";
import useFetch from "../../utils/useFetch";

const CountryDetail = () => {
  const { countryName } = useParams();

  let history = useHistory();

  const { data, isPending, error } = useFetch(`${apiURL}/name/${countryName}`);

  return (
    <div className="container">
      <button onClick={() => history.goBack()}>Back</button>
      {isPending && !error && <h3>Loading...</h3>}
      {error && !isPending && <h3>{error}</h3>}
      {data?.map((country, index) => (
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
