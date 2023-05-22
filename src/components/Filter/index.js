const CountryFilter = ({ onSelect }) => {
  const renderRegion = (e) => {
    const region = e.target.value;
    onSelect(region);
  };

  return (
    <select onChange={renderRegion}>
      <option>Filter by region...</option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Oceania">Oceania</option>
      <option value="Europe">Europe</option>
      <option value="America">America</option>
    </select>
  );
};

export default CountryFilter;
