import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Gold & Blade Barber Studio — Charlotte, NC",
  description: "Barbería premium en Charlotte con servicios de corte, afeitado clásico y tratamientos. Reserva en línea.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} bg-zinc-50 text-zinc-900`}>
        <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
          <nav className="container flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold">Gold &amp; Blade</Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/services" className="hover:text-brand">Servicios</Link>
              <Link href="/about" className="hover:text-brand">Nosotros</Link>
              <Link href="/contact" className="px-3 py-1.5 rounded-full bg-brand text-white hover:bg-brand-dark transition">
                Reservar
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t bg-white">
          <div className="container py-10 text-sm flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
            <p>© {new Date().getFullYear()} Gold &amp; Blade Barber Studio. Charlotte, NC.</p>
            <p className="opacity-70">Edita todo en <code>content/content.json</code></p>
          </div>
        </footer>
      </body>
    </html>
  )
}
