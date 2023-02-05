import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectSingleGallery } from "../store/gallery/selector";
import { getSingleGalleryAction } from "../store/gallery/slice";
import { editGalleryAction } from "../store/gallery/slice";
import { GalleryForm } from "./components/GalleryForm.component";

export const EditGalleryPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleGallery = useSelector(makeSelectSingleGallery);
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

  useEffect(() => {
    dispatch(getSingleGalleryAction(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    setReduxStateToComponentState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleGallery, dispatch]);

  const setReduxStateToComponentState = () => {
    setGallery({
      title: singleGallery.title,
      description: singleGallery.description,
    });
    let arr = [];
    for (let i = 0; i < singleGallery.image_url.length; i++) {
      arr.push({ link: singleGallery.image_url[i] });
    }
    setLinkInput(arr);
  };

  const handleEditGallery = (e) => {
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
      dispatch(editGalleryAction({ id: id, data: gallery }));
      history.push(`/galleries/${id}`);
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

  const handleReorderLinks = (i, direction) => {
    const updatedArr = [...linkInput];
    if (direction === "UP") {
      let arr = [];
      const sorted = reorderArray(updatedArr, i, -1);
      sorted.map((object) => arr.push({ link: object.link }));
      setLinkInput(arr);
    }
    if (direction === "DOWN") {
      let arr = [];
      const sorted = reorderArray(updatedArr, i, 1);
      sorted.map((object) => arr.push({ link: object.link }));
      setLinkInput(arr);
    }
  };

  const reorderArray = (array, i, delta) => {
    let newIndex = i + delta;
    if (newIndex < 0 || Number(newIndex) === Number(array.length)) return;
    let indexes = [i, newIndex].sort((a, b) => a - b);
    array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]);
    return array;
  };

  return (
    <>
      <GalleryForm
        gallery={gallery}
        onChange={setGallery}
        handleSubmit={handleEditGallery}
        formText={"Edit Gallery"}
        addInput={handleAddInputField}
        linkInput={linkInput}
        cancel={handleCancelAndRedirect}
        removeLink={handleRemoveLink}
        handleInputChange={handleLinks}
        reorderLinks={handleReorderLinks}
      />
      <br />
      <br />
    </>
  );
};
