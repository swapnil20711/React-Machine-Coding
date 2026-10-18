import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "React Machine Coding",
  description: "Practice solutions for React machine coding rounds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="top-nav">
          <Link href="/">← All problems</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
