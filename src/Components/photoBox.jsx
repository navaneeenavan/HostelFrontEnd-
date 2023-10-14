import React, { useState } from 'react';

const PhotoUploadBox = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="p-6 border border-gray-300 rounded-md shadow-md mr-10 mt-10">
      <label className="block mb-2 text-lg font-medium text-gray-700">
        Upload a Photo
      </label>
      <input
        type="file"
        accept="image/*"
        className="py-2 px-3 border border-gray-300 rounded w-full"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div className="mt-3">
          <p className="text-gray-600">{selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoUploadBox;
