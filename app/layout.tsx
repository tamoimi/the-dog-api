import type { Metadata } from "next";
import { Inter, Montserrat, Noto_Sans } from "next/font/google";
import "./globals.css";
import { SWRProvider } from "./swr-provider";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Be Happy!",
  description: "The dog API by Tami",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SWRProvider> {children}</SWRProvider>
      </body>
    </html>
  );
}
