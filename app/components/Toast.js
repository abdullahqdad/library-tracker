export default function Toast({ book }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <p>
          Last added book: <strong>{book.title}</strong> by {book.author}{" "}
          (Genre: {book.genre}, Published: {book.publicationDate})
        </p>
        <p className="mt-2">Description: {book.description}</p>
      </div>
    </div>
  );
}
