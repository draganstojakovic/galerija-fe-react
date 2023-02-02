import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirstPageGalleriesAction } from "../store/galleries/slice";
import { makeSelectGalleries } from "../store/galleries/selector";
import { makeSelectFilteredGalleries } from "../store/galleries/selector";
import { getNextPageGalleriesAction } from "../store/galleries/slice";
import { GalleryDetails } from "./components/GalleryDetails.component";
import { Filter } from "./components/Filter.component";
import { getFilteredGalleriesAction } from "../store/galleries/slice";

export const AllGalleriesPage = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(makeSelectGalleries);
  const filteredGalleris = useSelector(makeSelectFilteredGalleries);
  const [currentPage, setCurrentPage] = useState(2);
  const [searchTerm, setSearchTerm] = useState({
    searchTerm: "",
  });
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    dispatch(getFirstPageGalleriesAction());
  }, [dispatch]);

  const handleLoadMoreGalleries = () => {
    if (Number(galleries?.last_page) === Number(currentPage)) {
      return;
    }
    setCurrentPage(currentPage + 1);
    try {
      dispatch(getNextPageGalleriesAction(Number(currentPage)));
    } catch (err) {
      console.error(err);
    }
  };

  const handleFetchSearchedTerm = (e) => {
    e.preventDefault();
    if (!searchTerm.searchTerm) {
      return;
    }
    try {
      dispatch(getFilteredGalleriesAction(searchTerm?.searchTerm));
      setSearchTerm({ searchTerm: "" });
      setSearchMode(true);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(filteredGalleris);

  return (
    <>
      {!!window.localStorage.getItem("loginToken") && (
        <Filter
          search={searchTerm}
          onChange={setSearchTerm}
          handleSubmit={handleFetchSearchedTerm}
        />
      )}
      {searchMode ? (
        <>
          {filteredGalleris?.data.map((gallery, i) => (
            <div className="d-flex justify-content-center" key={i}>
              <GalleryDetails
                galleryId={gallery.id}
                title={gallery.title}
                imageUrl={gallery.image_url}
                createdAt={gallery.created_at}
                user={gallery.user}
                userId={gallery.user_id}
              />
            </div>
          ))}
        </>
      ) : (
        <div className="card mx-5">
          {galleries ? (
            <>
              {galleries?.data?.map((gallery, i) => (
                <div className="d-flex justify-content-center" key={i}>
                  <GalleryDetails
                    galleryId={gallery.id}
                    title={gallery.title}
                    imageUrl={gallery.image_url}
                    createdAt={gallery.created_at}
                    user={gallery.user}
                    userId={gallery.user_id}
                  />
                </div>
              ))}
            </>
          ) : (
            <h3 className="d-flex justify-content-center">No Galleries</h3>
          )}
          <br />
        </div>
      )}
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
