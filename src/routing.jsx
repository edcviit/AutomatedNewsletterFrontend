// Routing.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewsletterForm from "./components/AddNewsletterForm";
import ViewNewsletters from "./components/ViewNewsletters";
import ViewNewsletter from "./components/ViewNewsletter"; // Add this line
import App from "./App"; // Add this line

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/ >} />
        <Route path="/addNewsletter" element={<AddNewsletterForm />} />
        <Route path="/viewNewsletters" element={<ViewNewsletters />} />
        <Route
          path="/viewNewsletter/:newsletterId"
          element={<ViewNewsletter />}
        />{" "}
        {/* Add this line */}
        {/* Add more routes as needed */}
        {/* <Route path="/editNewsletter/:id" element={EditNewsletterForm} /> */}
        {/* ... */}
      </Routes>
    </Router>
  );
};

export default Routing;
