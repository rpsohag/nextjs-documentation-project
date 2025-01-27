import { Inter } from "next/font/google";
import "./globals.css";
import { getDocuments } from "@/lib/doc";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docucraft - A documentation website by protocol",
  description: "A documentation website by protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments()
  console.log(allDocuments)
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
