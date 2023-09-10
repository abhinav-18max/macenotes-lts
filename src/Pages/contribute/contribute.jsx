import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import Social from "../social/social";

const DocumentUploader = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [country, setCountry] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., upload file, save data, etc.
  };

  return (
    <div>
      <Navigation />
      <h2>Document Uploader</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Document: <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <label>
          Country:
          <select value={country} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            {/* Add more countries */}
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Social />
    </div>
  );
};

export default DocumentUploader;
