export const Filter = ({ search, onChange, handleSubmit }) => {
  return (
    <>
      <header className="d-flex justify-content-center">
        <nav className=" shadow p-3 mb-5 bg-white rounded ">
          <form onSubmit={handleSubmit}>
            <div className="form-group mx-sm-3 mb-2 ">
              <input
                className="form-control"
                placeholder="Filter Galleries"
                value={search.searchTerm}
                required
                onChange={(e) =>
                  onChange({ ...search, searchTerm: e.target.value })
                }
              />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" type="submit">
                Filter
              </button>
            </div>
          </form>
        </nav>
      </header>
      <br />
    </>
  );
};
