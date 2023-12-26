// ViewNewsletter.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logoNewsletter from "../assets/logoNewsletter.svg";
// import newsName from "frontend\\src\\assets\\newsName.svg";
import EDCicon from "../assets/EDC-icon.webp";
const ViewNewsletter = () => {
  const { newsletterId } = useParams();
  const [newsletter, setNewsletter] = useState(null);

  useEffect(() => {
    // Fetch a single newsletter by ID when the component mounts
    fetch(
      // `http://localhost:3001/admin/getNewsletter/${newsletterId}`
      `https://automatednewsletter-production.up.railway.app/admin/getNewsletter/${newsletterId}`
    ) // Replace with your backend endpoint to fetch a single newsletter
      .then((response) => response.json())
      .then((data) => {
        setNewsletter(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching newsletter:", error));
  }, [newsletterId]);

  if (!newsletter) {
    return <div>Loading...</div>;
  }
  const LinesOfPara = (para) => {
    const lineList = para.split("\n");

    return (
      <div>
        {lineList.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="nav">
        <div className="logo-name">
          <img src={logoNewsletter} alt="VIIT Logo" />
        </div>
        <div className="letter-name">
          <img
            src="https://res.cloudinary.com/dwrlwv8gz/image/upload/v1703134877/newsName_trhohu.svg"
            alt="Letter logo"
          />
        </div>
        <div className="logo-name">
          <img src={EDCicon} alt="EDC Logo" />
        </div>
      </div>
      <br /><br /><br /> <br />
      <h2>{newsletter.title}</h2>
      {/* <p>{newsletter.createdAt}</p> */}

      {newsletter.paragraphs.map((paragraph, index) => (
        <div key={index}>
          {LinesOfPara(paragraph.content)}
          {newsletter.images[index] && (
            <div>
              <img
                src={newsletter.images[index].url}
                alt={newsletter.images[index].description}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ViewNewsletter;
