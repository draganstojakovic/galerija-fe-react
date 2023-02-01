import { Link } from "react-router-dom";
import { useFormattedDate } from "../../hooks/useFormattedDate";

export const GalleryDetails = ({
  galleryId,
  title,
  imageUrl,
  createdAt,
  user,
  userId,
}) => {
  const date = useFormattedDate(createdAt);
  return (
    <>
      <span>
        <br />
        <h1>
          <Link to={`/galleries/${galleryId}`}>{title}</Link>
        </h1>
        <p>{date}</p>
        <p>
          <a href={imageUrl[0]} target="_blank" rel="noreferrer">
            <img src={imageUrl[0]} width="450" alt="" />
          </a>
        </p>
        <p>
          <Link to={`/authors/${userId}`}>
            {" "}
            {user.first_name} {user.last_name}
          </Link>
        </p>
      </span>
    </>
  );
};
