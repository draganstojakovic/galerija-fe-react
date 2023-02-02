export const Filter = () => {
  return (
    <>
      <header className="d-flex justify-content-center">
        <nav className=" shadow p-3 mb-5 bg-white rounded ">
          <form>
            <input className="form-control" placeholder="Filter Galleries" />
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
