import type { ReactNode } from "react";
import { rootMetadata, rootViewport } from "@/lib/root";
import "../../globals.css";

export const metadata = rootMetadata("de");
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
