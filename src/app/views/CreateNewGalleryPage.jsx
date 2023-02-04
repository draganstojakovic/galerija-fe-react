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
  // const [reorderedLinks, setReorderedLinks] = useState([]);

  useEffect(() => {
    setGallery({
      ...gallery,
      image_url: [...linkInput.map((obj) => obj.link)],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkInput]);

  // useEffect(() => {
  //   setLinkInput(reorderedLinks);
  // }, [reorderedLinks]);

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

  // const handleReorderLinks = (i, direction) => {
  //   const updatedArr = [...linkInput];
  //   if (direction === "UP") {
  //     setReorderedLinks(
  //       reorderArray({ oldIndex: i, newIndex: i + -1 }, updatedArr)
  //     );
  //   }
  //   if (direction === "DOWN") {
  //     setReorderedLinks(
  //       reorderArray({ oldIndex: i, newIndex: i + 1 }, updatedArr)
  //     );
  //   }
  // };
  // console.log(reorderedLinks)
  // const reorderArray = (event, originalArray) => {
  //   const movedItem = originalArray.find(
  //     (el, index) => index === event.oldIndex
  //   );
  //   const remainingItems = originalArray.filter(
  //     (el, index) => index !== event.oldIndex
  //   );
  //   const reorderedItems = [
  //     ...remainingItems.slice(0, event.newIndex),
  //     movedItem,
  //     ...remainingItems.slice(event.newIndex),
  //   ];
    
  //   return reorderedItems;
  // };

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
        // reorderLinks={handleReorderLinks}
      />
      <br />
      <br />
    </>
  );
};
