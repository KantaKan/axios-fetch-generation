import React, { useState } from "react";
import axios from "axios";

const StudenPost = ({ name, description, profilePicURL, id, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localName, setLocalName] = useState(name);
  const [localDescription, setLocalDescription] = useState(description);
  const [localProfilePicURL, setLocalProfilePicURL] = useState(profilePicURL);

  const handleDelete = async () => {
    const isConfirm = confirm("เป็นแฟนกันนะ");
    if (!isConfirm) return;
    const response = await axios.delete(`https://memory-backend-forjsd11.onrender.com/api/users/${id}`);
    onDelete();
  };

  const handleEditClick = () => {
    setLocalName(name);
    setLocalDescription(description);
    setLocalProfilePicURL(profilePicURL);
    setIsEditing(true);
  };

  const handleConfirm = async () => {
    //เขียนโค้ดตรงนี้้ Put method
    setIsEditing(false);

    onDelete();
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-sm w-full transform hover:-translate-y-2">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img src={profilePicURL} alt={name || "Profile"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>

      <div className="relative p-6">
        {isEditing ? (
          <div className="space-y-3">
            <input className="w-full rounded border px-3 py-2 text-gray-800" value={localName} onChange={(e) => setLocalName(e.target.value)} placeholder="Name" />
            <textarea className="w-full rounded border px-3 py-2 text-gray-800" value={localDescription} onChange={(e) => setLocalDescription(e.target.value)} placeholder="Description" rows={3} />
            <input className="w-full rounded border px-3 py-2 text-gray-800" value={localProfilePicURL} onChange={(e) => setLocalProfilePicURL(e.target.value)} placeholder="Profile image URL" />
            <div className="flex gap-2">
              <button className="bg-green-500 text-white px-3 py-2 rounded" onClick={handleConfirm}>
                Confirm
              </button>
              <button className="bg-gray-300 px-3 py-2 rounded" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">{localName}</h1>

            <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors duration-300">{localDescription}</p>
          </>
        )}

        {!isEditing && (
          <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded" onClick={handleEditClick}>
            Edit
          </button>
        )}

        <button className="bg-red-500 w-full mt-3 py-2 rounded text-white" onClick={handleDelete}>
          delete this
        </button>
        <div className="mt-6 h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export default StudenPost;
