import { useState, useEffect } from "react";
import { galleryService } from "../services/GalleryService";

export const HomePage = () => {
  const [galleries, setGalleries] = useState([]);

  const handleGetAllGalleries = async () => {
    try {
      const data = await galleryService.getAll();
      setGalleries(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetAllGalleries();
  }, [])

  console.log(galleries);

  return <h1>HomePage</h1>;
};
