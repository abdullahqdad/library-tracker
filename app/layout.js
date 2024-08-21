'use client';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeWrapper from "./context/theme";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900">
        <ThemeWrapper>
          <Header />
          <main className="dark:bg-gray-900">{children}</main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
