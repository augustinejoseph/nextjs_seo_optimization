import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "My Blog | Augustine Joseph",
    template: "%s - My Blog",
  },

  description: "Read the awesome articles!",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    title: "My Blog | Augustine Joseph",
    description: "Read the awesome articles!",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMAGE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "My Awesome Blog - Latest Articles",
      },
    ],
    siteName: "My Awesome Blog",
  },

  twitter: {
    card: "summary_large_image",
    site: "@myawesomeblog",
    title: "My Awesome Blog",
    description: "Come and read my awesome articles!",
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_IMAGE_URL}/opengraph-image.png`,
        alt: "Twitter Card Image",
      },
    ],
  },

  keywords: ["awesome blog", "articles", "technology", "web development"],

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_IMAGE_URL}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
