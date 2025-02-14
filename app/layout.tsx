import { FloatingActionButton } from "@/components/FloatingActionButton"
import type React from "react"
import { ThemeProvider } from "next-themes"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toast"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Toaster />
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

