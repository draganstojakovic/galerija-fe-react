import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirstPageGalleriesAction } from "../store/galleries/slice";
import { makeSelectGalleries } from "../store/galleries/selector";
import { makeSelectFilteredGalleries } from "../store/galleries/selector";
import { getNextPageGalleriesAction } from "../store/galleries/slice";
import { GalleryDetails } from "./components/GalleryDetails.component";
import { Filter } from "./components/Filter.component";
import { getFilteredGalleriesAction } from "../store/galleries/slice";
import { getNextPageOfFilteredGalleriesAction } from "../store/galleries/slice";

export const AllGalleriesPage = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(makeSelectGalleries);
  const filteredGalleris = useSelector(makeSelectFilteredGalleries);
  const [searchTerm, setSearchTerm] = useState({
    searchTerm: "",
  });
  const [storeTerm, setStoreTerm] = useState("");
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    dispatch(getFirstPageGalleriesAction());
  }, [dispatch]);

  const handleLoadMoreGalleries = () => {
    if (searchMode) {
      if (
        Number(filteredGalleris?.last_page) ===
        Number(filteredGalleris?.current_page)
      ) {
        return;
      }
      try {
        dispatch(
          getNextPageOfFilteredGalleriesAction({
            term: storeTerm,
            page: Number(filteredGalleris?.current_page + 1),
          })
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      if (Number(galleries?.last_page) === Number(galleries?.current_page)) {
        return;
      }
      try {
        dispatch(
          getNextPageGalleriesAction(Number(galleries?.current_page + 1))
        );
      } catch (err) {
        console.error(err);
      }
    }
  };
  console.log(filteredGalleris)
  const handleFetchSearchedTerm = (e) => {
    e.preventDefault();
    if (!searchTerm.searchTerm) return;
    try {
      dispatch(getFilteredGalleriesAction(searchTerm?.searchTerm));
      setStoreTerm(searchTerm.searchTerm);
      setSearchTerm({ searchTerm: "" });
      setSearchMode(true);
    } catch (err) {
      console.error(err);
    }
  };

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
          {filteredGalleris.data.length === 0 && (
            <>
              <div className="d-flex justify-content-center">No results</div>
              <br />
            </>
          )}
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
        <div>
          {galleries.data.length > 0 ? (
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
            <>
              <br />
              <h3 className="d-flex justify-content-center">No Galleries</h3>
            </>
          )}
          <br />
        </div>
      )}
      <br />
      <br />
      {searchMode ? (
        <>
          {Number(filteredGalleris?.last_page) !==
            Number(filteredGalleris?.current_page) && (
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
        </>
      ) : (
        <>
          {Number(galleries?.last_page) !== Number(galleries?.current_page) && (
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
        </>
      )}
      <br />
      <br />
    </>
  );
};
