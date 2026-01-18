import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "../components/Navbar"; // Import Navbar
import BootstrapClient from "../components/BootstrapClient"; // Import BootstrapClient
import Footer from "../components/Footer"; // Import Footer

const lato = Lato({
  weight: ["400", "700"], // Include 600 for semi-bold
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
  metadataBase: new URL("https://vitoferraro.com"),
  openGraph: {
    title: "Dott. Vito Ferraro - Psicologo",
    description:
      "Studio psicologico del Dott. Vito Ferraro. Supporto psicologico e percorsi di crescita personale.",
    images: [
      {
        url: "/hero.jpeg", // Path to social sharing image in `public` folder
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
        <Navbar /> {/* Add Navbar component */}
        {children}
        <BootstrapClient /> {/* Add BootstrapClient component */}
        <Footer /> {/* Add Footer component */}
      </body>
    </html>
  );
}
