import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apisco-precision-client.vercel.app/"),
  title: "Apisco Precision - Pharmaceutical ingredient sourcing & indenting",
  description:
    "Apisco Precision connects global API manufacturers with pharmaceutical industry through precise sourcing, documentation and logistics.",
  openGraph: {
    title: "Apisco Precision - Ingredient sourcing & indenting",
    description:
      "A considered route between global pharmaceutical ingredient manufacturers and formulation floor.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Apisco Precision logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body className="page-body">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
