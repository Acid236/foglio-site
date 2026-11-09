import type { ReactNode } from "react";
import { rootMetadata, rootViewport } from "@/lib/root";
import "../../globals.css";

export const metadata = rootMetadata();
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
