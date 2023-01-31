export const GalleryForm = ({
  gallery,
  onChange,
  handleSubmit,
  formText,
  arr,
  addInput,
  handleChange,
}) => {
  return (
    <>
      <h1>{formText}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title*:</label>
        <input
          id="title"
          type="text"
          value={gallery.title}
          required
          onChange={(e) => onChange({ ...gallery, title: e.target.value })}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          type="text"
          value={gallery.description}
          onChange={(e) =>
            onChange({ ...gallery, description: e.target.value })
          }
        />
        <br />
        <label htmlFor="image_url">Image URLs*:</label>
        {arr.map((item, i) => {
          return (
            <div key={i}>
              <input
                key={i}
                onChange={handleChange}
                value={item.value}
                id={i}
                type={item.type}
              />
              <br />
            </div>
          );
        })}
        <button type="button" onClick={() => addInput()}>
          Add Another URL
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
