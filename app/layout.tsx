import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Apisco Precision - Pharmaceutical ingredient sourcing & indenting",
  description:
    "Apisco Precision connects global API manufacturers with Bangladesh's pharmaceutical industry through precise sourcing, documentation and logistics.",
  openGraph: {
    title: "Apisco Precision - Ingredient sourcing & indenting",
    description:
      "A considered route between global pharmaceutical ingredient manufacturers and Bangladesh's formulation floor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
