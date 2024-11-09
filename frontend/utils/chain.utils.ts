import { defineChain } from "thirdweb"

export const greenfieldTestnet = defineChain({
    id: 5600,
    name: "GreenField",
    rpc: "https://gnfd-testnet-fullnode-tendermint-ap.bnbchain.org",
    chainId: 5600,
    testnet: true,
    nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
    },
})
