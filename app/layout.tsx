import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { FloatingWhatsApp } from "@/components/whatsapp/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Garza",
  description: "Grupo garza es una empresa de servicios profesionales",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/drotzbucj/image/upload/v1769150013/miniatura_wvwqum.png",
        width: 1200,
        height: 630,
        alt: "Grupo Garza",
      },
    ],
  },
  icons: {
    icon: "https://res.cloudinary.com/drotzbucj/image/upload/v1769150013/miniatura_wvwqum.png",
    apple: "https://res.cloudinary.com/drotzbucj/image/upload/v1769150013/miniatura_wvwqum.png",
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} suppressHydrationWarning={true}>
        {/* Guías visuales de depuración (eliminar después) */}
        {/* <div className="fixed inset-0 pointer-events-none z-[9999] mx-auto max-w-screen-xl px-4 lg:px-0 opacity-50">
          <div className="h-full grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-x border-red-600 bg-red-600/5"></div>
            <div className="border-x border-red-600 bg-red-600/5"></div>
            <div className="border-x border-red-600 bg-red-600/5"></div>
            <div className="border-x border-red-600 bg-red-600/5"></div>
          </div>
        </div>  */}
        
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
