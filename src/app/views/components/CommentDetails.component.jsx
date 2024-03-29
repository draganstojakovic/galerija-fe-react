import { useFormattedDate } from "../../hooks/useFormattedDate";
import { useState, useEffect } from "react";
import { userService } from "../../services/UserService";
import { Link } from "react-router-dom";

export const CommentDetails = ({
  commentId,
  content,
  createdAt,
  userId,
  authUserId,
  handleDeleteComment,
}) => {
  const date = useFormattedDate(createdAt);
  const [commentAuthor, setCommentAuthor] = useState({});

  const handleFetchCommentAuthor = async (id) => {
    try {
      const { data } = await userService.showOnlyUser(id);
      setCommentAuthor(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleFetchCommentAuthor(Number(userId));
  }, [userId]);

  return (
    <div className="m-3">
      <p>
        {date}:{" "}
        <Link to={`/authors/${commentAuthor?.id}`}>
          {commentAuthor?.first_name} {commentAuthor?.last_name}
        </Link>
      </p>
      <h5>{content}</h5>
      {authUserId === userId && (
        <p>
          <button
            className="btn btn-primary"
            onClick={() => handleDeleteComment(commentId)}
          >
            Delete Comment
          </button>
        </p>
      )}
    </div>
  );
};
