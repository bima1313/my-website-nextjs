import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

/*
In montserrat font = default weight 600, so for using bold must be initialized "font-bold" in tailwind CSS
font-semibold: weight = 600 
font-bold: weight = 700 
font-normal: weight = 400
*/
const montserrat = Montserrat({
  weight: ["600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "Helvetica", "sans-serif"],
});

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Bima Hamdhika Irfy",
  description: "My website Created with NextJs",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    type: "website",
    title: "Bima Hamdhika Irfy",
    description: "My website Created with NextJs",
    url: "https://bima-hamdhika-irfy.vercel.app/",
    images: [
      {
        url: "https://ucrjmqloirqtrqxindxn.supabase.co/storage/v1/object/public/opengraph//opengraph_image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
