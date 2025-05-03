import React, { useState } from 'react';

const UploadVideo = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    thumbnail: null,
    video: null,
    genre: '',
    language: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Upload Form Data:', form);
    // You can add form submission logic here
  };

  return (
    <div className=' flex justify-center items-center min-h-screen max-h-screen overflow-y-scroll w-full scrollbar-hide px-4' >  
    <div className=" max-w-3xl mx-auto mb-20 mt-20 p-6 bg-white text-black shadow-lg rounded-xl w-4/6 text " >
      <h2 className="text-xl sm:text-xl md:text-3xl font-bold text-center mb-6 text-gray-800">Upload New Video</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Video Description"
          value={form.description}
          onChange={handleChange}
          rows="4"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Thumbnail Image</label>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Video File</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div>

        <select
          name="genre"
          value={form.genre}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Genre</option>
          <option value="Music">Music</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="News">News</option>
          <option value="Vlog">Vlog</option>
        </select>

        <select
          name="language"
          value={form.language}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Language</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
          <option value="Marathi">Marathi</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
        >
          Upload Video
        </button>
      </form>
    </div>
    </div>
  );
};

export default UploadVideo;
