import type { Metadata } from "next";
import "./globals.css";
import Menu from "./componentes/menu";

export const metadata: Metadata = {
  title: "Exercício com Next.JS",
  description: "Criado por Myllena Bitar",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu/>
        {children}
      </body>
    </html>
  );
}

