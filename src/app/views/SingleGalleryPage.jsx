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
      <p className="d-flex justify-content-center">
        <Link to={`/authors/${singleGallery.user.id}`}>
          {singleGallery.user.first_name} {singleGallery.user.last_name}
        </Link>
      </p>
      {singleGallery.description ? (
        <>
          <p>Description:</p>
          <div className="d-flex justify-content-center">
            <p>{singleGallery.description}</p>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">. . .</div>
      )}

      <Carousel>
        {singleGallery &&
          singleGallery.image_url.map((url) => (
            <div>
                <img src={url} />
            </div>
          ))}
      </Carousel>

      <br />
    </div>
  );
};

// onClick={() => window.open({url})}
