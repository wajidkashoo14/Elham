import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import "./globals.css";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";

const poppins = Poppins({ subsets: ["latin"], weight: ['400','500', '700'], });

export const metadata: Metadata = {
  title: "Elham",
  description: "Handicrafted Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

        {children}
      </body>
    </html>
  );
}
