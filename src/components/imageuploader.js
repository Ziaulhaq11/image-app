import React, { useEffect, useState } from "react";
import ImageCard from "./imageCard";
import { useDropzone } from "react-dropzone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ImageSlider from "./imageSlider";

const styles = {
  button: {
    margin: "10px 0",
    padding: "10px 20px",
    border: "1px solid blue",
    backgroundColor: "blue",
    color: "white",
    fontSize: "25px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  input: {
    fontSize: "20px",
    textDecoration: "none",
  },
};

const Uploader = () => {
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     setImages(
  //       acceptedFiles.map(file => Object.assign(file, {
  //         preview : URL.createObjectURL(file)
  //       }))
  //     )
  //   }
  // })

  const imageHandler = (e) => {
    setImage(e.target.files[0].name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setImages((images) => [...images, image]);
  };

  return (
    <div>
      <form>
        <input
          style={styles.input}
          type="file"
          name="image"
          onChange={imageHandler}
        />
        <button style={styles.button} onClick={submitHandler}>
          Add To Caraousel
        </button>
      </form>
      {/* <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop files here</p>
      </div> */}
      {console.log(image)}
      <ImageCard image={image} />
      <div>
        <ImageSlider slides={images} />
      </div>
    </div>
  );
};

export default Uploader;

{
  /* <img
        src={require("../images/pexels-alexandr-podvalny-1227513.jpg").default}
        alt=""
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      /> */
}
