import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakshi Pabrekar - Full Stack .Net Developer Portfolio",
 description: "Passionate Full Stack .NET Developer focused on building secure, scalable, and high-performance web applications using ASP.NET Core, Web API, Entity Framework Core, SQL Server, and modern front-end technologies.",
 keywords: "Sakshi Sharad Pabrekar, Full Stack .NET Developer, ASP.NET Core Developer, C# Developer, .NET Core, ASP.NET MVC, Web API, Entity Framework Core, SQL Server, LINQ, RESTful APIs, JavaScript, jQuery, Bootstrap, HTML, CSS, Authentication, Authorization, Enterprise Applications, Software Engineer, Web Development, Portfolio",
  authors: [{ name: "Sakshi Pabrekar" }],
  openGraph: {
    title: "Sakshi Pabrekar - Full Stack .Net Developer",
    description: "Passionate Full Stack .NET Developer focused on building secure, scalable, and high-performance web applications using ASP.NET Core, Web API, Entity Framework Core, SQL Server, and modern front-end technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakshi Pabrekar - Full Stack .Net Developer",
  description: "Passionate Full Stack .NET Developer focused on building secure, scalable, and high-performance web applications using ASP.NET Core, Web API, Entity Framework Core, SQL Server, and modern front-end technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
