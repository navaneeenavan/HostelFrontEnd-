import React, { useState } from "react";
import axios from "axios";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server with the form data
      const response = await axios.post("http://localhost:4000/dummy-query", formData, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });

      // Handle the response as needed (e.g., show a success message)
      console.log(response.data);

      // Optionally, you can reset the form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Handle any errors that occur during the POST request
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
