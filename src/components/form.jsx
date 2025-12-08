import React, { useState } from "react";
// import { createUser } from "../lib/fetch";

const Formxdd = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    profilePicURL: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // await createUser(formData);
      console.log(formData);
      setFormData({
        name: "",
        description: "",
        profilePicURL: "",
      });
      if (onUserCreated) {
        onUserCreated();
      }
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-amber-50 flex justify-evenly">
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" value={formData.name} onChange={handleChange} placeholder="name" disabled={loading} />
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="description" value={formData.description} onChange={handleChange} placeholder="description" disabled={loading} />
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="profilePicURL" value={formData.profilePicURL} onChange={handleChange} placeholder="imgurl" disabled={loading} />
      <button type="submit" className="font-bold bg-green-400 rounded-4xl w-24" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Formxdd;
