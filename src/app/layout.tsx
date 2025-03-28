import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"

const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: { template: "%s | Ken Commerce", absolute: "Ken Commerce" },
  description: "A full-stack e-commerce application.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  )
}
