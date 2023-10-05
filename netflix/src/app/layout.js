import GlobalState from "../context/index";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "../auth-provider/index";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>{children}</GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}