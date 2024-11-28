import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestión de Notas",
  description: "Plataforma para gestión de notas de estudiantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-Anaheim antialiased bg-gray_secondary p-space-sm`} // Aplicando fuente y espaciado global
      >
        {/* Aplicacion de clases de Tailwind para margen y espaciado */}
        <div className="container mx-auto my-18 px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
