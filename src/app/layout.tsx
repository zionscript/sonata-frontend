import type { Metadata } from "next";
import { Inter, Zilla_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const zilla = Zilla_Slab({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: ["400","500","700"]
});

export const metadata: Metadata = {
  title: "Editora Sonata",
  description: "Editora Sonata | Prestamos serviços editoriais, como Revisão, Diagramação e Ilustrações para autores independentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zilla.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
