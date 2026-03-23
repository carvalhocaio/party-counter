import type { Metadata } from "next";
import {
  geistSans,
  geistMono,
  epilogue,
  beVietnamPro,
  plusJakartaSans,
} from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PAGODE DA GABI - Convite de Aniversário",
  description:
    "Vem pro Pagode da Gabi! Aniversário com samba, cerveja gelada e churrasco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${epilogue.variable} ${beVietnamPro.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
