function TopBar() {
  
  return (
    <div className="container-fluid sticky-top topBarSticky">
      <div className="row topBar justify-content-between">
        <div className="col-4">
          <div className="input-group searchBar mb-3">
            <button className="btn btn-outline-secondary" type="button" id="search-button">
              <i className="bi bi-search"></i>
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a country"
              aria-label="Search"
              aria-describedby="search-button"
            />
          </div>
        </div>
        <div className="col-2 text-end">
          <select className="form-select">
            <option value="filter">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
