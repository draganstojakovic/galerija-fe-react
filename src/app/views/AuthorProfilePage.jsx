import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GalleryDetails } from "./components/GalleryDetails.component";
import { getUserGalleriesAction } from "../store/galleries/slice";
import { makeSelectUserGalleries } from "../store/galleries/selector";
import { getOnlyUserAction } from "../store/user/slice";
import { makeSelectOnlyUser } from "../store/user/selector";
import { getNextPageUserGalleriesAction } from "../store/galleries/slice";
import { Filter } from "./components/Filter.component";
import { getFilteredUserGalleriesAction } from "../store/galleries/slice";
import { makeSelectFilteredUserGalleries } from "../store/galleries/selector";
import { getNextPageOfFilteredUserGalleriesAction } from "../store/galleries/slice";

export const AuthorProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(makeSelectOnlyUser);
  const galleries = useSelector(makeSelectUserGalleries);
  const filteredGalleries = useSelector(makeSelectFilteredUserGalleries);
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState({
    searchTerm: "",
  });
  const [storeTerm, setStoreTerm] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  
  useEffect(() => {
    dispatch(getOnlyUserAction(Number(id)));
    dispatch(getUserGalleriesAction(Number(id)));
  }, [id, dispatch]);

  const handleLoadMoreGalleries = () => {
    if (searchMode) {
      if (
        Number(filteredGalleries?.last_page) ===
        Number(filteredGalleries?.current_page)
      ) {
        return;
      }
      try {
        dispatch(
          getNextPageOfFilteredUserGalleriesAction({
            term: storeTerm,
            userId: id,
            page: Number(filteredGalleries?.current_page),
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
          getNextPageUserGalleriesAction({
            id: id,
            page: Number(galleries?.current_page + 1),
          })
        );
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleFetchSearchedTerm = (e) => {
    e.preventDefault();
    if (!searchTerm.searchTerm) return;
    try {
      dispatch(
        getFilteredUserGalleriesAction({
          term: searchTerm.searchTerm,
          userId: id,
        })
      );
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
      <div className="d-flex justify-content-center">
        <h1>
          {user.first_name} {user.last_name}
        </h1>
      </div>
      <br />
      <br />
      {galleries.data.length === 0 && (
        <>
          <div className="d-flex justify-content-center">No Galleries</div>
          <br />
        </>
      )}
      <div>
        {searchMode ? (
          <>
            {filteredGalleries.data.length === 0 && (
              <>
                <div className="d-flex justify-content-center">No results</div>
                <br />
              </>
            )}
            {filteredGalleries ? (
              <>
                {filteredGalleries?.data?.map((gallery, i) => (
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
            ) : (
              <h3 className="d-flex justify-content-center">No Galleries</h3>
            )}
          </>
        ) : (
          <>
            {galleries ? (
              <>
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
            ) : (
              <h3 className="d-flex justify-content-center">No Galleries</h3>
            )}
          </>
        )}
      </div>
      <br />
      <br />
      {searchMode ? (
        <>
          {Number(filteredGalleries?.last_page) !==
          Number(filteredGalleries?.current_page) && (
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
