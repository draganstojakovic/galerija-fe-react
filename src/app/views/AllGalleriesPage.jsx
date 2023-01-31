import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirstPageGalleriesAction } from "../store/galleries/slice";
import { makeSelectGalleries } from "../store/galleries/selector";
import { GalleryDetails } from "./components/GalleryDetails.component";

export const AllGalleriesPage = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(makeSelectGalleries);

  useEffect(() => {
    dispatch(getFirstPageGalleriesAction());
  }, [dispatch]);

  console.log(galleries);

  // const handleLoadMoreGalleries = () => {

  // };

  return (
    <>
      {galleries && (
        <ul>
          {galleries?.data?.map((gallery) => (
            <li key={gallery.id}>
              <GalleryDetails
                title={gallery.title}
                description={gallery.description}
                imageUrl={gallery.image_url}
                createdAt={gallery.created_at}
                user={gallery.user}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
