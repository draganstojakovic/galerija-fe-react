import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { makeSelectAuthUser } from "../store/auth/selector";
import { getAuthUserAction } from "../store/auth/slice";
import { getAuthUserGalleries } from "../store/galleries/slice";
import { makeSelectAuthUserGalleries } from "../store/galleries/selector";
import { GalleryDetails } from "./components/GalleryDetails.component";
import { getNextPageAuthUserGalleriesAction } from "../store/galleries/slice";
import { authService } from "../services/AuthService";

export const MyGalleriesPage = () => {
  const dispatch = useDispatch();
  // const authUser = useSelector(makeSelectAuthUser);
  const galleries = useSelector(makeSelectAuthUserGalleries);

  const [currentPage, setCurrentPage] = useState(1);
  const [authUser, setAuthUser] = useState({});

  const handleGetAuthUser = async () => {
    try {
      const response = await authService.me();
      setAuthUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetAuthUser();
  }, []);

  useEffect(() => {
    dispatch(getAuthUserGalleries(authUser.id));
  }, [dispatch, authUser]);
  
  const handleLoadMoreGalleries = () => {
    if (Number(galleries?.last_page) === Number(currentPage)) {
      return;
    }
    setCurrentPage(currentPage + 1);
    try {
      dispatch(
        getNextPageAuthUserGalleriesAction({
          page: currentPage,
          id: authUser?.id,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(authUser);
  // console.log(galleries);

  return (
    <>
      {authUser && (
        <>
          {galleries && (
            <div className="card mx-5">
              {galleries.data.map((gallery, i) => (
                <div className="d-flex justify-content-center" key={i}>
                  <GalleryDetails
                    galleryId={gallery.id}
                    title={gallery.title}
                    imageUrl={gallery.imageUrl}
                    createdAt={gallery.created_at}
                    user={authUser}
                    userId={authUser.id}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <br />
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

// {authUser && (
//   <div className="card mx-5">
//     {galleries && (
//       <>
//         {galleries.data.map((gallery, i) => (
//           <div className="d-flex justify-content-center" key={i}>
//             <GalleryDetails
//               galleryId={gallery.id}
//               title={gallery.title}
//               imageUrl={gallery.image_url}
//               createdAt={gallery.created_at}
//               user={authUser}
//               userId={authUser.id}
//             />
//           </div>
//         ))}
//       </>
//     )}
//   </div>
// )}
