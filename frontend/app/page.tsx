import { Swap } from "@/components/swap"

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center py-8">
      <h1 className="mb-8 text-3xl font-bold">Multi-Chain DEX Aggregator</h1>
      <Swap />
    </main>
  )
}