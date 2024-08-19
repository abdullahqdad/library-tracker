import { useSortedBooks } from "../hooks/useSortedBooks";

export default function BooksList({ books }) {
  const sortedBooks = useSortedBooks(books);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Books List</h2>
      <div className="space-y-4">
        {sortedBooks.map((book, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-gray-700">by {book.author}</p>
            <p className="text-gray-600">Genre: {book.genre}</p>
            <p className="text-gray-500">Published: {book.publicationDate}</p>
            <p className="mt-2 text-gray-600">{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
