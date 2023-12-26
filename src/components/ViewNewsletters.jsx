// ViewNewsletters.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const ViewNewsletters = () => {
  const [newsletters, setNewsletters] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch newsletters when the component mounts
    fetch(
      // "http://localhost:3001/admin/getNewsletters/"
      "https://automatednewsletter-production.up.railway.app/admin/getNewsletters/"
    ) // Replace with your backend endpoint to fetch newsletters
      .then((response) => response.json())
      .then((data) => setNewsletters(data))
      .catch((error) => console.error("Error fetching newsletters:", error));
  }, []);

  return (
    <div>
      <h2>View Newsletters</h2>
      {newsletters.map((newsletter) => (
        <div key={newsletter._id}>
          <h3>
            <Link to={`/viewNewsletter/${newsletter._id}`}>
              {newsletter.title}
            </Link>
          </h3>
        </div>
      ))}
      <br /><br />
      <button onClick={()=>{
        navigate("/addNewsletter")
      }}>Add more</button>
    </div>
  );
};

export default ViewNewsletters;
