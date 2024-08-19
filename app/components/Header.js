export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Library Book Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about_us"
                className="text-white hover:text-gray-300 transition-colors"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
