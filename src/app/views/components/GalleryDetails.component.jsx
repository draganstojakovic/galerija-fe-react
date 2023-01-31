import { Link } from "react-router-dom";

export const GalleryDetails = ({
  title,
  description,
  imageUrl,
  createdAt,
  user,
}) => {
  return (
    <>
      <span className="border-3">
        <h3>{title}</h3>
        <p>{createdAt}</p>
        <p>
          <img src={imageUrl[0]} width="200" alt="" />
        </p>
        <p>
          <Link to={`/users/${user.id}`}>
            {" "}
            {user.first_name} {user.last_name}
          </Link>
        </p>
      </span>
    </>
  );
};
