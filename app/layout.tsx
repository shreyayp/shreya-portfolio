import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreya Y P — Data, Designed with Purpose",
  description: "Data analytics and engineering portfolio of Shreya Y P.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
