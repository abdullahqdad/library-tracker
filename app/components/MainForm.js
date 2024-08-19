import { useState } from "react";
import Toast from "./Toast";

export default function MainForm({ books, setBooks }) {
  const [showToast, setShowToast] = useState(false);
  const [lastAddedBook, setLastAddedBook] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    const formData = new FormData(e.target);
    const newBook = {
      title: formData.get("title"),
      author: formData.get("author"),
      genre: formData.get("genre"),
      publicationDate: formData.get("publicationDate"),
      description: formData.get("description"),
    };

    setBooks([...books, newBook]);
    setLastAddedBook(newBook);

    e.target.reset();

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Book Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the title of the book"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-medium mb-2"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the author's name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block text-gray-700 font-medium mb-2"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the book's genre"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="publicationDate"
              className="block text-gray-700 font-medium mb-2"
            >
              Publication Date
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter a brief description of the book"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Book
          </button>
        </form>

        {showToast && lastAddedBook && (
          <div className="mt-4">
            <Toast book={lastAddedBook} />
          </div>
        )}
      </div>
    </div>
  );
}
