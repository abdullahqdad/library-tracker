"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="p-6 max-w-4xl mx-auto dark:bg-gray-900 dark:text-gray-200">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to Library Book Tracker, where our mission is to make managing your personal book library simple and enjoyable.
        </p>
      </header>

      {/* Main Content */}
      <section className="mb-8">
        <div className="relative">
          <Image
            src="/assets/image.jpg"
            alt="Library"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            width={400}
            height={200}
          />
        </div>
        <p className="mt-4 text-lg">
          allows you to track your books, categorize them by genre, and keep detailed records of your reading history. Designed for book enthusiasts of all kinds, our app provides a user-friendly interface to enhance your reading experience.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/assets/1.jpg"
              alt="Team Member 1"
              className="w-24 h-24 rounded-full mx-auto mb-2"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-bold">Jane Doe</h3>
            <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/assets/2.jpg"
              alt="Team Member 2"
              className="w-24 h-24 rounded-full mx-auto mb-2"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-gray-600 dark:text-gray-400">Lead Developer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/assets/3.jpg"
              alt="Team Member 3"
              className="w-24 h-24 rounded-full mx-auto mb-2"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-bold">Emily Johnson</h3>
            <p className="text-gray-600 dark:text-gray-400">UX Designer</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          Have questions or feedback? Reach out to us via email or follow us on social media.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="text-lg"><strong>Email:</strong> contact@librarybooktracker.com</li>
          <li className="text-lg"><strong>Twitter:</strong> <a href="https://twitter.com/librarytracker" className="text-blue-500 hover:underline">twitter.com/librarytracker</a></li>
          <li className="text-lg"><strong>Facebook:</strong> <a href="https://facebook.com/librarybooktracker" className="text-blue-500 hover:underline">facebook.com/librarybooktracker</a></li>
        </ul>
      </section>
    </div>
  );
}
