import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GalleryDetails } from "./components/GalleryDetails.component";
import { getUserGalleriesAction } from "../store/galleries/slice";
import { makeSelectUserGalleries } from "../store/galleries/selector";
import { getOnlyUserAction } from "../store/user/slice";
import { makeSelectOnlyUser } from "../store/user/selector";

export const AuthorProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(makeSelectOnlyUser);
  const galleries = useSelector(makeSelectUserGalleries);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOnlyUserAction(Number(id)));
    dispatch(getUserGalleriesAction(Number(id)));
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
        {galleries && (
          <>
            <div className="d-flex justify-content-center">
              <h3>{user.first_name}'s Galleries:</h3>
            </div>
            {galleries?.data?.map((gallery) => (
              <div className="d-flex justify-content-center" key={gallery.id}>
                <GalleryDetails
                  galleryId={gallery.id}
                  title={gallery.title}
                  imageUrl={gallery.image_url}
                  createdAt={gallery.created_at}
                  user={user}
                  userId={id}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
