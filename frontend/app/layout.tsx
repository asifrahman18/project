import { ThemeProvider } from "@/components/ui/theme";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import "./globals.css";
import NavBar from "./navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <main className="pt-6">
              {children}
            </main>
            <Toaster />
            {/* <Footer /> */}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
