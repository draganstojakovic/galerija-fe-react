export const CommentDetails = ({ content, createdAt }) => {
  return (
    <div className="card mx-5">
      <p>{createdAt}</p>
      <p>{content}</p>
    </div>
  );
};
