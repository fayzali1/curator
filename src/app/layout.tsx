import type { Metadata } from "next";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/app/theme-provider";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "@/components/ui/sidebar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amazon Boost",
  description: "Amazon Boost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning data-overscroll="white">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen font-sans`}
        >
          <SidebarProvider>
            <ThemeProvider>
              <main className="w-full max-w-full">{children}</main>
              <Toaster />
            </ThemeProvider>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
