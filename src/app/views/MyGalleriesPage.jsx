import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectAuthUser } from "../store/auth/selector";
import { getAuthUserAction } from "../store/auth/slice";
import { getAuthUserGalleries } from "../store/galleries/slice";
import { makeSelectAuthUserGalleries } from "../store/galleries/selector";
import { GalleryDetails } from "./components/GalleryDetails.component";
import format from "date-fns/format";

export const MyGalleriesPage = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(makeSelectAuthUser);
  const galleries = useSelector(makeSelectAuthUserGalleries);

  useEffect(() => {
    dispatch(getAuthUserAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuthUserGalleries(authUser.id));
  }, [dispatch, authUser]);

  return (
    <>
      <div className="card mx-5">
        {galleries && (
          <>
            {galleries?.data?.map((gallery) => (
              <div className="d-flex justify-content-center" key={gallery.id}>
                <GalleryDetails
                  galleryId={gallery.id}
                  title={gallery.title}
                  imageUrl={gallery.image_url}
                  createdAt={format(
                    new Date(gallery.created_at),
                    "yyyy-mm-dd hh:mm:ss"
                  )}
                  user={authUser}
                />
              </div>
            ))}
          </>
        )}
        <br />
        <br />
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-primary">
          Load More
        </button>
      </div>
      <br />
      <br />
    </>
  );
};
