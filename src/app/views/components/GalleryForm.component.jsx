export const GalleryForm = ({
  gallery,
  onChange,
  handleSubmit,
  formText,
  addInput,
  linkInput,
  cancel,
  removeLink,
  handleInputChange,
  // reorderLinks,
}) => {
  return (
    <>
      <h1 className="d-flex justify-content-center">{formText}</h1>
      <br />
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="title">Title*</label>
          <input
            className="form-control"
            id="title"
            type="text"
            value={gallery.title}
            required
            minLength="2"
            maxLength="255"
            onChange={(e) => onChange({ ...gallery, title: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            type="text"
            value={gallery?.description}
            rows="7"
            maxLength="1000"
            onChange={(e) =>
              onChange({ ...gallery, description: e.target.value })
            }
          />
        </div>
        <br />
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="image_url">Image URLs*</label>
          {Array.isArray(linkInput) &&
            linkInput.map((input, i) => (
              <div className="input-group mb-3" key={i}>
                <input
                  className="form-control"
                  id="image_url"
                  type="text"
                  value={input.link}
                  required
                  pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.jpeg|.png|.gif)"
                  onChange={(e) => handleInputChange(e, i)}
                />
                <br />
                {/* {linkInput.length !== 1 && (
                  <>
                    {Number(i) === 0 && (
                      <>
                        <div style={{ color: "#ffffff" }}>__</div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => reorderLinks(i, "DOWN")}
                        >
                          🡳
                        </button>
                      </>
                    )}
                    {Number(i) !== 0 &&
                      Number(i) !==
                        Number(
                          linkInput.lastIndexOf(linkInput[linkInput.length - 1])
                        ) && (
                        <>
                          <div style={{ color: "#ffffff" }}>__</div>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => reorderLinks(i, "DOWN")}
                          >
                            🡳
                          </button>
                          <div style={{ color: "#ffffff" }}>__</div>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => reorderLinks(i, "UP")}
                          >
                            🡱
                          </button>
                        </>
                      )}
                    {Number(
                      linkInput.lastIndexOf(linkInput[linkInput.length - 1])
                    ) === Number(i) && (
                      <>
                        <div style={{ color: "#ffffff" }}>__</div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => reorderLinks(i, "UP")}
                        >
                          🡱
                        </button>
                      </>
                    )}
                  </>
                )} */}
                {linkInput.length !== 1 && (
                  <>
                    <div style={{ color: "#ffffff" }}>__</div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => removeLink(i)}
                    >
                      Remove Image
                    </button>
                  </>
                )}
              </div>
            ))}
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addInput()}
          >
            Add another image
          </button>
        </div>
        <br />
        <div className="btn-group">
          <div style={{ color: "#ffffff" }}>__</div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div style={{ color: "#ffffff" }}>__</div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => cancel()}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <br />
    </>
  );
};
