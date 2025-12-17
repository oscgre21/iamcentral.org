import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IGLESIA APOSTOLICA Y MISIONERA CENTRAL - Iglesia Apostólica y Misionera",
  description: "Iglesia Apostólica y Misionera Central: Predicando la verdad, amando a las personas y transformando nuestra comunidad con el poder del Espíritu Santo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
