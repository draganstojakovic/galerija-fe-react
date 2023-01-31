import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitNewgalleryAction } from "../store/gallery/slice";
import { makeSelectAuthUser } from "../store/auth/selector";
import { getAuthUserAction } from "../store/auth/slice";
import { GalleryForm } from "./components/GalleryForm.component";

export const CreateNewGalleryPage = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(makeSelectAuthUser);
  const [gallery, setGallery] = useState({
    title: "",
    description: "",
  });

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

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
    } catch (err) {
      console.error(err);
    }
  };
  console.log(inputArr);

  return (
    <>
      <GalleryForm
        gallery={gallery}
        onChange={setGallery}
        handleSubmit={handleSubmitNewGallery}
        formText={"Create New Gallery"}
        arr={arr}
        addInput={addInput}
        handleChange={handleChange}
      />
    </>
  );
};

/* <button onClick={addInput}>+</button>
      {arr.map((item, i) => {
        return (
          <input
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
            size="40"
          />
        );
      })} */
