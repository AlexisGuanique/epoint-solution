import type { Metadata } from "next";
import { Inter, Noto_Sans, Poppins, Roboto, Roboto_Slab } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Epoint Solution",
  description:
    "Scale your business with expert marketing & consulting. Professional marketing strategies, targeted advertising, and one-on-one mentorship for entrepreneurs and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${poppins.variable} ${inter.variable} ${notoSans.variable} ${robotoSlab.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-(family-name:--font-roboto) text-[#333]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
