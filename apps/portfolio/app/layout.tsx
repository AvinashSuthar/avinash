import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avinash Suthar | Software Developer",
  description:
    "I am a software developer specializing in Next.js, TypeScript, and modern web technologies.",
  keywords:
    "Avinash Suthar, Software Developer, Next.js, TypeScript, Web Development",
  openGraph: {
    title: "Avinash Suthar | Software Developer",
    description:
      "Building high-performance web applications with Next.js and modern technologies.",
    url: "https://avinashsuthar.in",
    siteName: "Avinash Suthar Portfolio",
    images: [
      {
        url: "https://avinashsuthar.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avinash Suthar Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Suthar | Software Developer",
    description:
      "Building high-performance web applications with Next.js and modern technologies.",
    images: ["https://avinashsuthar.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <head>
          <link rel="canonical" href="https://avinashsuthar.in" />

          {/* JSON-LD Schema.org for SEO */}
          <Script
            id="json-ld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Avinash Suthar",
                url: "https://avinashsuthar.in",
                sameAs: [
                  "https://github.com/AvinashSuthar",
                  "https://www.linkedin.com/in/avinash-suthar-970a56230",
                  "https://www.instagram.com/avinashsutharr",
                  "https://x.com/avinash__suthar",
                ],
                jobTitle: "Software Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Freelancer / Avinash Suthar",
                },
              }),
            }}
          />
        </head>
      </head>
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
