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
  title: "Party Counter",
  description: "Party Counter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${epilogue.variable} ${beVietnamPro.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body">
        {children}
      </body>
    </html>
  );
}
