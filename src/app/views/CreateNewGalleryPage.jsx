import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitNewgalleryAction } from "../store/gallery/slice";
import { makeSelectAuthUser } from "../store/auth/selector";
import { getAuthUserAction } from "../store/auth/slice";
import { GalleryForm } from "./components/GalleryForm.component";
import { useHistory } from "react-router-dom";

export const CreateNewGalleryPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authUser = useSelector(makeSelectAuthUser);
  const [gallery, setGallery] = useState({
    title: "",
    description: "",
    image_url: [],
  });

  const handleSubmitNewGallery = (e) => {
    e.preventDefault();
    if (!gallery.title) {
      alert("Missing title");
      return;
    }
    if (!gallery.image_url) {
      alert("Add at least one image");
      return;
    }
    try {
      dispatch(getAuthUserAction());
    } catch (err) {
      console.error(err);
    }
    try {
      dispatch(submitNewgalleryAction({ id: authUser.id, data: gallery }));
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <GalleryForm
        gallery={gallery}
        onChange={setGallery}
        handleSubmit={handleSubmitNewGallery}
        formText={"Create New Gallery"}
      />
    </>
  );
};
