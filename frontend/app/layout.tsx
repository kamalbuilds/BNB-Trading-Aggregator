"use client"
import "@/styles/globals.css"
// import { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

import { QueryProvider } from "@/components/providers/query-provider"
import { SiteHeader } from "@/components/site-header"
import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Multi-Chain DEX Aggregator",
//   description: "A decentralized exchange aggregator across multiple chains",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", inter.className)}>
          <ThirdwebProvider>
          <QueryProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </QueryProvider>
          </ThirdwebProvider>
      </body>
    </html>
  )
}