export const GalleryForm = ({ gallery, onChange, handleSubmit, formText }) => {
  return (
    <>
      <h1 className="d-flex justify-content-center">{formText}</h1>
      <br />
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="title">Title*:</label>
          <input
            className="form-control"
            id="title"
            type="text"
            value={gallery.title}
            required
            minlength="2" 
            maxlength="255"
            onChange={(e) => onChange({ ...gallery, title: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            type="text"
            value={gallery.description}
            rows="7"
            maxlength="1000"
            onChange={(e) =>
              onChange({ ...gallery, description: e.target.value })
            }
          />
        </div>
        <br />
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="image_url">Image URLs*:</label>
          <input
            className="form-control"
            id="image_url"
            type="text"
            value={gallery.image_url}
            required
            onChange={(e) =>
              onChange({ ...gallery, image_url: [e.target.value] })
            }
          />
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <br />
    </>
  );
};
