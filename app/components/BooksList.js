import { useSortedBooks } from "../hooks/useSortedBooks";

export default function BooksList({ books }) {
  const sortedBooks = useSortedBooks(books);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Books List</h2>
      <div className="space-y-4">
        {sortedBooks.map((book, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold dark:text-gray-100">{book.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">by {book.author}</p>
            <p className="text-gray-600 dark:text-gray-400">Genre: {book.genre}</p>
            <p className="text-gray-500 dark:text-gray-500">Published: {book.publicationDate}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
