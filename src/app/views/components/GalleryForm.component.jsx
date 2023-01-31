export const GalleryForm = ({ gallery, onChange, handleSubmit, formText }) => {
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
        <input
          id="image_url"
          type="text"
          value={gallery.image_url}
          required
          onChange={(e) =>
            onChange({ ...gallery, image_url: [e.target.value] })
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
