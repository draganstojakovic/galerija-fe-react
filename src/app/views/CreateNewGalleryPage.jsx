import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { submitNewgalleryAction } from "../store/gallery/slice";
import { GalleryForm } from "./components/GalleryForm.component";
import { useHistory } from "react-router-dom";

export const CreateNewGalleryPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [gallery, setGallery] = useState({
    title: "",
    description: "",
    image_url: [],
  });

  const [linkInput, setLinkInput] = useState([{ link: "" }]);

  useEffect(() => {
    setGallery({
      ...gallery,
      image_url: [...linkInput.map((obj) => obj.link)],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkInput]);

  const handleSubmitNewGallery = (e) => {
    e.preventDefault();
    if (!gallery.title) {
      alert("Missing title");
      return;
    }
    if (gallery.image_url.length === 0) {
      alert("Missing images.");
      return;
    }
    try {
      dispatch(submitNewgalleryAction(gallery));
      history.push("/my-galleries");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancelAndRedirect = () => {
    history.push("/");
  };

  const handleRemoveLink = (index) => {
    setLinkInput(linkInput.filter((el, i) => i !== index));
  };

  const handleAddInputField = () => {
    setLinkInput([...linkInput, { link: "" }]);
  };

  const handleLinks = (e, index) => {
    const result = linkInput.map((linkObj, i) => {
      if (i === index) {
        return {
          ...linkObj,
          link: e.target.value,
        };
      }
      return linkObj;
    });
    setLinkInput(result);
  };

  return (
    <>
      <GalleryForm
        gallery={gallery}
        onChange={setGallery}
        handleSubmit={handleSubmitNewGallery}
        formText={"Create New Gallery"}
        addInput={handleAddInputField}
        linkInput={linkInput}
        cancel={handleCancelAndRedirect}
        removeLink={handleRemoveLink}
        handleInputChange={handleLinks}
      />
      <br />
      <br />
    </>
  );
};
