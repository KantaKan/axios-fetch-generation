import React from "react";

const StudenPost = ({ name, description, profilePicURL, id, onDelete }) => {
  const handleDelete = async () => {
    const isConfirm = confirm("ลบใช่ไหมม");
    if (!isConfirm) return;
    /// เขียนโค้ดตรงนี้ ลบนะ DELETE
    onDelete();
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-sm w-full transform hover:-translate-y-2">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img src={profilePicURL} alt={name || "Profile"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>

      <div className="relative p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">{name}</h1>

        <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors duration-300">{description}</p>

        <button className="bg-red-500 w-full" onClick={handleDelete}>
          delete this
        </button>
        <div className="mt-6 h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export default StudenPost;
