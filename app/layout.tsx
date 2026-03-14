import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioFlame | IoT Biogas Monitor",
  description: "Real-time monitoring for biogas systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}