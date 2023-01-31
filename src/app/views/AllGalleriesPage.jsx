import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGalleriesAction } from "../store/galleries/slice";
import { makeSelectGalleries } from "../store/galleries/selector";

export const AllGalleriesPage = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(makeSelectGalleries);

  useEffect(() => {
    dispatch(getAllGalleriesAction());
  }, [dispatch]);

  console.log(galleries)

  return <h1>HomePage</h1>;
};
