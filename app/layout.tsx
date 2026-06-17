import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brigadoze | Brigadeiros Artesanais",
  description:
    "Brigadeiros artesanais feitos à mão em Portugal. Sabores únicos, ingredientes de qualidade e um toque português em cada doce.",
  openGraph: {
    title: "Brigadoze | Brigadeiros Artesanais",
    description:
      "Brigadeiros artesanais feitos à mão em Portugal.",
    url: "https://www.instagram.com/brigadoze/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
