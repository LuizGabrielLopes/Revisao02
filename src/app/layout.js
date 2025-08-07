import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import { productsData } from "../data/products";

const font = Roboto({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aula 02",
  icons: {
    icon: "/icons/favicon.ico",
  },
  description: "Projeto pra mostrar tudo que eu sei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={font.variable}>
        <Header 
          title="🛒 Loja de Eletrônicos" 
          subtitle="Os melhores produtos com os melhores preços!" 
          totalProducts={productsData.length} 
        />
        {children}
      </body>
    </html>
  );
}