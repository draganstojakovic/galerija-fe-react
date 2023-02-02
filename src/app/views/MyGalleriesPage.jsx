import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectAuthUser } from "../store/auth/selector";
import { getAuthUserAction } from "../store/auth/slice";
import { getAuthUserGalleries } from "../store/galleries/slice";
import { makeSelectAuthUserGalleries } from "../store/galleries/selector";
import { GalleryDetails } from "./components/GalleryDetails.component";
import { getNextPageAuthUserGalleriesAction } from "../store/galleries/slice";
import { Filter } from "./components/Filter.component";

export const MyGalleriesPage = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(makeSelectAuthUser);
  const galleries = useSelector(makeSelectAuthUserGalleries);
  const [searchTerm, setSearchTerm] = useState({
    searchTerm: "",
  });
  const [searchMode, setSearchMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getAuthUserAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuthUserGalleries(authUser.id));
  }, [authUser, dispatch]);

  const handleLoadMoreGalleries = () => {
    if (Number(galleries?.last_page) === Number(currentPage)) {
      return;
    }
    setCurrentPage(currentPage + 1);
    try {
      dispatch(
        getNextPageAuthUserGalleriesAction({
          id: authUser.id,
          page: currentPage,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {!!window.localStorage.getItem("loginToken") && <Filter />}
      {galleries ? (
        <div className="card mx-5">
          {galleries?.data?.map((gallery, i) => (
            <div className="d-flex justify-content-center" key={i}>
              <GalleryDetails
                galleryId={gallery.id}
                title={gallery.title}
                imageUrl={gallery.image_url}
                createdAt={gallery.created_at}
                user={authUser}
                userId={authUser?.id}
              />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="d-flex justify-content-center">
          {authUser?.first_name} {authUser?.last_name} has no galleries.
        </h3>
      )}
      <br />
      <br />
      <br />
      {Number(galleries?.last_page) !== Number(currentPage) ? (
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleLoadMoreGalleries()}
          >
            Load More
          </button>
        </div>
      ) : (
        <p className="d-flex justify-content-center">On Last Page</p>
      )}
      <br />
      <br />
    </>
  );
};
