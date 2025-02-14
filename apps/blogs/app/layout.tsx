import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@repo/ui/themeProvider";
import { ThemeSwitcher } from "@/components/ChangeTheme";
import Navbar from "@repo/ui/navbar";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Blogs - Avinash Suthar",
  description:
    "this is a blog website with content of tech blogs, by Avinash Suthar a full stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          //@ts-ignore
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar
            themeSwitcher={<ThemeSwitcher />}
            navItems={[
              {
                name: "Home",
                link: "/",
                icon: <FaHome />,
              },
              {
                name: "About",
                link: "/about",
                icon: <FcAbout />,
              },
            ]}
          />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
