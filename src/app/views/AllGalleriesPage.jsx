import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirstPageGalleriesAction } from "../store/galleries/slice";
import { makeSelectGalleries } from "../store/galleries/selector";
import { getNextPageGalleriesAction } from "../store/galleries/slice";
import { GalleryDetails } from "./components/GalleryDetails.component";

export const AllGalleriesPage = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(makeSelectGalleries);

  useEffect(() => {
    dispatch(getFirstPageGalleriesAction());
  }, [dispatch]);

  console.log(galleries);

  const handleLoadMoreGalleries = () => {
    try {
      if (galleries?.last_page === 100000) {
        return;
      }
      dispatch(getNextPageGalleriesAction(Number(galleries?.current_page + 1)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {galleries && (
        <>
          {galleries?.data?.map((gallery) => (
            <div
              className="d-flex justify-content-center"
              key={gallery.id}
            >
              <GalleryDetails
                galleryId={gallery.id}
                title={gallery.title}
                imageUrl={gallery.image_url}
                createdAt={gallery.created_at}
                user={gallery.user}
              />
            </div>
          ))}
        </>
      )}
      <br />
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleLoadMoreGalleries()}
      >
        Load More
      </button>
      <br />
      <br />
      <br />
    </>
  );
};
