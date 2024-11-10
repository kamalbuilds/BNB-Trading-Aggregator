'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shuffle, Shield, PanelTop } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const HomeScreen = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <header className="container mx-auto px-4 py-8">
                <nav className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">CrossChain DEX</h1>
                    <Button variant="outline">Launch App</Button>
                </nav>
            </header>

            <main className="container mx-auto px-4">
                <motion.section
                    className="text-center py-20"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-5xl font-bold mb-6">Simplify Your Cross-Chain Trading</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        One-click bridging and trading across multiple chains. Get the best prices, lowest fees, and enhanced security.
                    </p>
                    <Button size="lg" className="mr-4">
                        Start Trading
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline">
                        Learn More
                    </Button>
                </motion.section>

                <motion.section
                    className="py-20"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Zap className="h-12 w-12 mb-4" />}
                            title="Best Prices"
                            description="Aggregate liquidity from multiple DEXs to ensure you always get the best prices."
                        />
                        <FeatureCard
                            icon={<Shuffle className="h-12 w-12 mb-4" />}
                            title="Cross-Chain Liquidity"
                            description="Seamlessly trade assets across different blockchains with optimal prices and user experience."
                        />
                        <FeatureCard
                            icon={<Shield className="h-12 w-12 mb-4" />}
                            title="MEV Protection"
                            description="Enhanced security measures to protect your trades from MEV attacks."
                        />
                    </div>
                </motion.section>

                <motion.section
                    className="py-20"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-3xl font-bold mb-12 text-center">How It Works</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <Card className="w-full md:w-1/3">
                            <CardHeader>
                                <CardTitle>1. Connect Wallet</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Link your wallet to access your assets across multiple chains.
                            </CardContent>
                        </Card>
                        <Card className="w-full md:w-1/3">
                            <CardHeader>
                                <CardTitle>2. Select Trade</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Choose the assets you want to trade and the amount.
                            </CardContent>
                        </Card>
                        <Card className="w-full md:w-1/3">
                            <CardHeader>
                                <CardTitle>3. Confirm & Swap</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Review the best route and confirm your trade with one click.
                            </CardContent>
                        </Card>
                    </div>
                </motion.section>

                <motion.section
                    className="py-20"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="text-3xl font-bold mb-12 text-center">Supported DEXs</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        <DexLogo name="PancakeSwap V3" />
                        <DexLogo name="Uniswap V3" />
                        <DexLogo name="SushiSwap V3" />
                        <DexLogo name="1inch" />
                        <DexLogo name="Squid Router" />
                    </div>
                </motion.section>

                <motion.section
                    className="py-20 text-center"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="text-3xl font-bold mb-6">Ready to Start Trading?</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join the future of cross-chain trading with our advanced DEX aggregator.
                    </p>
                    <Button size="lg">
                        Launch App
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.section>
            </main>

            <footer className="container mx-auto px-4 py-8 text-center">
                <p>&copy; 2023 CrossChain DEX Aggregator. All rights reserved.</p>
            </footer>
        </div>
    )
}

function FeatureCard({ icon, title, description }) {
    return (
        <Card className="bg-gray-800">
            <CardHeader>
                <CardTitle className="flex flex-col items-center">
                    {icon}
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
}

function DexLogo({ name }) {
    return (
        <div className="bg-gray-800 rounded-full p-4 flex items-center justify-center w-24 h-24">
            <PanelTop className="h-12 w-12" />
            <span className="sr-only">{name}</span>
        </div>
    )
}