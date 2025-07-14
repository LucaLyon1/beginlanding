import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Begin Up",
  description: "La plateforme pour connecter les entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={comfortaa.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
