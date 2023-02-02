import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitNewgalleryAction } from "../store/gallery/slice";
import { GalleryForm } from "./components/GalleryForm.component";

export const CreateNewGalleryPage = () => {
  const dispatch = useDispatch();
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
      dispatch(submitNewgalleryAction(gallery));
      window.location.replace("/");
      // na liniji iznad izazivam osvezavanje stranice jer ne mili mi se dodavati ovu
      //  galeriju u paginisani niz galerija jer bi to napravilo problem zbog nacina na
      // koji brojanje stranice funkcionise
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
