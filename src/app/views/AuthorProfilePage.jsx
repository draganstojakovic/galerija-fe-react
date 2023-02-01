import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUserAction } from "../store/user/slice";
import { makeSelectUser } from "../store/user/selector";
import { GalleryDetails } from "./components/GalleryDetails.component";

export const AuthorProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(makeSelectUser);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleUserAction(Number(id)));
  }, [id, dispatch]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>
          {user.first_name} {user.last_name}
        </h1>
      </div>
      <br />
      <br />
      <div>
        {user.galleries && (
          <>
            <div className="d-flex justify-content-center">
              <h3>{user.first_name}'s Galleries:</h3>
            </div>
            {user.galleries.map((gallery) => (
              <div className="d-flex justify-content-center" key={gallery.id}>
                <GalleryDetails
                  galleryId={gallery.id}
                  title={gallery.title}
                  imageUrl={gallery.image_url}
                  createdAt={gallery.created_at}
                  user={user}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
