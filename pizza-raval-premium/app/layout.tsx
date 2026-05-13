import type { Metadata, Viewport } from "next";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pizzaraval.example"),
  title: "Pizza Raval — Pizzas, Empanadas y Milanesas en El Raval, Barcelona",
  description:
    "Pizzería argentina en el corazón de El Raval. Pizzas artesanales, empanadas caseras, milanesas y bar con cócteles. Pide a domicilio por WhatsApp. Joaquín Costa 18, Barcelona.",
  keywords: [
    "pizza raval barcelona",
    "empanadas barcelona raval",
    "pizzería argentina barcelona",
    "pizza take away joaquin costa",
    "vegan pizza barcelona raval",
  ],
  openGraph: {
    title: "Pizza Raval — Pizzas, Empanadas y Milanesas en El Raval",
    description: "Pizzería argentina en El Raval. Pide por WhatsApp.",
    type: "website",
  },
  icons: { icon: "/assets/logo.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#0F0E0C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,600;1,9..144,700&family=Inter+Tight:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body className="font-body">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
