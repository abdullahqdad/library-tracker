"use client";

import { useState } from "react";
import MainForm from "./components/MainForm";
import BooksList from "./components/BooksList";
import { AuthContext } from "./context/auth";
import LoginForm from "./components/loginForm";
import { useContext } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  const { tokens } = useContext(AuthContext)


  return (
    <>
      {!tokens ? (
        <LoginForm />
      ) : (
        <div className="p-6">
          <MainForm books={books} setBooks={setBooks} />
          <div className="mt-8">
            <BooksList books={books} />
          </div>
        </div>
      )}
    </>
  );
}
