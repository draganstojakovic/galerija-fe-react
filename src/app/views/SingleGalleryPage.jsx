import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectSingleGallery } from "../store/gallery/selector";
import { getSingleGalleryAction } from "../store/gallery/slice";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const SingleGalleryPage = () => {
  const { id } = useParams();
  const singleGallery = useSelector(makeSelectSingleGallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleGalleryAction(id));
  }, [id, dispatch]);

  console.log(singleGallery);

  return (
    <div>
      <br />
      <h1 className="d-flex justify-content-center">{singleGallery.title}</h1>
      <br />
      <h5 className="d-flex justify-content-center">
        <Link to={`/authors/${singleGallery.user.id}`}>
          {singleGallery.user.first_name} {singleGallery.user.last_name}
        </Link>
      </h5>
      <br />
      {singleGallery.description ? (
        <>
          <div className="d-flex justify-content-center">
            <h3>Description:</h3>
          </div>
          <div className="d-flex justify-content-center">
            <p>{singleGallery.description}</p>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          . . .
          <br />
          <br />
        </div>
      )}
      <br />
      <Carousel>
        {singleGallery &&
          singleGallery.image_url.map((url, i) => (
            <div key={i} onClick={() => window.open(url)}>
              <img src={url} alt="" />
            </div>
          ))}
      </Carousel>

      <br />
    </div>
  );
};
