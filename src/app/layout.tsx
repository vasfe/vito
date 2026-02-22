import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "../components/Navbar";
import BootstrapClient from "../components/BootstrapClient";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dott. Vito Ferraro",
    default: "Dott. Vito Ferraro - Psicologo",
  },
  description:
    "Studio psicologico del Dott. Vito Ferraro. Supporto psicologico e percorsi di crescita personale.",
  metadataBase: new URL("https://www.ferraropsicologo.it"),
  openGraph: {
    title: "Dott. Vito Ferraro - Psicologo",
    description:
      "Studio psicologico del Dott. Vito Ferraro. Supporto psicologico e percorsi di crescita personale.",
    images: [
      {
        url: "/vito.jpeg", // Path to social sharing image in `public` folder
        width: 1200,
        height: 630,
        alt: "Dott. Vito Ferraro - Studio Psicologico",
      },
    ],
    locale: "it_IT",
    type: "website",
    siteName: "Dott. Vito Ferraro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${lato.variable} ${lato.className} antialiased`}>
        <Navbar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
