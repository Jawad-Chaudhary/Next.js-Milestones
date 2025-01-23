import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jawad's Journeys: Explore. Learn. Inspire.",
  description: "Welcome to Jawad's Journeys, where every post is a compass pointing to new horizons. Here, I share my adventures—whether trekking distant trails, navigating life's lessons, or uncovering hidden stories in everyday moments. Through vivid storytelling and candid reflections, this blog is a launchpad to explore the world, learn from its wonders, and inspire curiosity in others. Join me as we turn pages on maps, minds, and hearts—one journey at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <Container>
          <Navbar />
          {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
