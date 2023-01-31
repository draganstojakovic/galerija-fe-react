import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectSingleGallery } from "../store/gallery/selector";
import { getSingleGalleryAction } from "../store/gallery/slice";

export const SingleGalleryPage = () => {
  const { id } = useParams();
  const singleGallery = useSelector(makeSelectSingleGallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleGalleryAction(id));
  }, [id, dispatch]);

  console.log(singleGallery);

  return <h1>SingleGalleryPage</h1>;
};
