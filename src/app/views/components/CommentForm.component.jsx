export const CommentForm = ({ comment, onChange, handleSubmit }) => {
  return (
    <>
      <br />
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            className="form-control"
            placeholder="Your comment"
            type="text"
            value={comment.content}
            required
            maxLength="1000"
            onChange={(e) => onChange({ ...comment, content: e.target.value })}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Comment
          </button>
        </div>
      </form>
    </>
  );
};
