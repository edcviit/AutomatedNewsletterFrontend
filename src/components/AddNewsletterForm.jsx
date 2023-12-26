// AddNewsletterForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewsletterForm = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [firstimage, setFirstimage] = useState("");
  const [paragraphs, setParagraphs] = useState([""]);
  const [images, setImages] = useState([{ url: "", description: "" }]);
  const navigate = useNavigate();

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, ""]);
  };

  const handleParagraphChange = (index, value) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = value;
    setParagraphs(newParagraphs);
  };

  const handleAddImage = () => {
    setImages([...images, { url: "", description: "" }]);
  };

  const handleImageChange = (index, field, value) => {
    const newImages = [...images];
    newImages[index][field] = value;
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      subTitle,
      paragraphs,
      firstimage,
      images,
    };
    console.log(data);
    fetch(
      // "http://localhost:3001/admin/addNewsletter",
      "https://automatednewsletter-production.up.railway.app//admin/addNewsletter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Newsletter added successfully:", result);
        navigate("/viewNewsletters");
        // Optionally, you can redirect or update the UI in response to a successful addition
      })
      .catch((error) => {
        console.error("Error adding newsletter:", error);
        // Handle error, update UI accordingly
      });
  };

  return (
    <div>
      <h2>Add Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Subtitle:
          <input
            type="text"
            value={subTitle}
            onChange={(e) => setsubTitle(e.target.value)}
          />
        </label>
        <br />
        <br />
        <h3>Paragraphs</h3>
        <br />
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <label>
              Paragraph {index + 1}:
              <textarea
                value={paragraph}
                onChange={(e) => handleParagraphChange(index, e.target.value)}
              />
            </label>
            <br />
          </div>
        ))}
        <br />
        <button type="button" onClick={handleAddParagraph}>
          Add Paragraph
        </button>
        <br />
        <br />
        <h3>Images</h3>

        <br />
        <label>
          Hero Image:
          <input
            type="text"
            value={firstimage}
            onChange={(e) => setFirstimage(e.target.value)}
          />
        </label>
        <br />
        <br />
        {images.map((image, index) => (
          <div key={index}>
            <label>
              Image URL:
              <input
                type="text"
                value={image.url}
                onChange={(e) =>
                  handleImageChange(index, "url", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Image Description:
              <input
                type="text"
                value={image.description}
                onChange={(e) =>
                  handleImageChange(index, "description", e.target.value)
                }
              />
            </label>
            <br />
            <br />
          </div>
        ))}
        <br />
        <button type="button" onClick={handleAddImage}>
          Add Image
        </button>
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewsletterForm;
