"use client";

import { useState } from "react";
import MainForm from "./components/MainForm";
import BooksList from "./components/BooksList";

export default function Home() {
  const [books, setBooks] = useState([]);

  return (
    <div className="p-6">
      <MainForm books={books} setBooks={setBooks} />
      <div className="mt-8">
        <BooksList books={books} />
      </div>
    </div>
  );
}
