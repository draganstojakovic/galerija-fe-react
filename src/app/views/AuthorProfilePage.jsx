import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GalleryDetails } from "./components/GalleryDetails.component";
import { getUserGalleriesAction } from "../store/galleries/slice";
import { makeSelectUserGalleries } from "../store/galleries/selector";
import { getOnlyUserAction } from "../store/user/slice";
import { makeSelectOnlyUser } from "../store/user/selector";
import { getNextPageUserGalleriesAction } from "../store/galleries/slice";

export const AuthorProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(makeSelectOnlyUser);
  const galleries = useSelector(makeSelectUserGalleries);
  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    dispatch(getOnlyUserAction(Number(id)));
    dispatch(getUserGalleriesAction(Number(id)));
  }, [id, dispatch]);

  const handleLoadMoreGalleries = () => {
    if (Number(galleries?.last_page) === Number(currentPage)) {
      return;
    }
    setCurrentPage(currentPage + 1);
    try {
      dispatch(getNextPageUserGalleriesAction({ id: id, page: currentPage }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>
          {user.first_name} {user.last_name}
        </h1>
      </div>
      <br />
      <br />
      <div className="card mx-5">
        {galleries && (
          <>
            <br />
            <br />
            <div className="d-flex justify-content-center">
              <h3>{user.first_name}'s Galleries:</h3>
            </div>
            {galleries?.data?.map((gallery, i) => (
              <div className="d-flex justify-content-center" key={i}>
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
      <br />
      <br />
      {Number(galleries?.last_page) !== Number(currentPage) && (
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleLoadMoreGalleries()}
          >
            Load More
          </button>
        </div>
      )}
      <br />
      <br />
    </>
  );
};
