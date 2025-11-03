import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nafis Difaudin | Portfolio",
  description: "Showcasing my projects and applications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
